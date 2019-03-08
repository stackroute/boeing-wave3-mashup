import { Component, OnInit } from '@angular/core';
import { DiffEditorModel, NgxEditorModel } from 'ngx-monaco-editor';
import { QuestioExeEngineService } from '../../services/questio-exe-engine.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { autocomplete } from './autocomplete';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({

  selector: 'app-edit',
  styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }', `ul{
    list-style-type: none;
  }`],
  styleUrls: [],
  templateUrl: './edit.component.html'


})
export class EditComponent implements OnInit {

  // wesocket
  title = 'grokonez';
  public difficulty: String;
  public uname: String;
  public testpass: String;
  public totaltest: String;
  description = 'Angular-WebSocket Demo';

  greetings: string[] = [];

  disabled = true;
  // name: string;
 code: String;
  private stompClient = null;
  // socket ends here
  questionObj: String;
  result: String;
  auto = new autocomplete;
  questionId;
    questionTitle: String;
    questionDescription: String ;
    inputFormat: String[];
    outputFormat: String[];
    inputFormat1: String;
    outputFormat1: String;
    tags: String;
    gitUrl: String;
  selectedLang = 'java';
  editorOptions = { theme: 'vs-dark', language: 'java' };

  selectChangeHandler(event: any) {
    // update the ui
    this.selectedLang = event.target.value;
    this.editorOptions = { theme: 'vs-dark', language: this.selectedLang };
    if (this.selectedLang === 'java') {
      monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    } else
      if (this.selectedLang === 'python') {
        monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getPythonCompletionProvider(monaco));
      } else
        if (this.selectedLang === 'cpp') {
          monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCppCompletionProvider(monaco));
        } else {
          monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCCompletionProvider(monaco));
        }
  }

  onInit(editor) {
    const line = editor.getPosition();
    const monaco = window['monaco'];
    monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));

  }
  constructor(public quesservice: QuestioExeEngineService, private _route: ActivatedRoute, private token: TokenStorageService) {
  }
  ngOnInit() {
    this.questionId = this._route.snapshot.paramMap.get('qid');
    this.uname = this.token.getUsername();
    this.connect();
     this.quesservice.getQuestionById(this.questionId).subscribe(
      data => {
       this.questionObj = data;
        this.questionId = data['questionId'];
        this.questionTitle = data['questionTitle'] ;
        this.questionDescription = data['questionDescription'] ;
        this.inputFormat1 = data['inputFormat'] ;
       this.inputFormat = this.inputFormat1.split('\n');
       this.outputFormat1 = data['outputFormat'];
        this.outputFormat = this.outputFormat1.split('\n');
        this.difficulty = data['difficulty'] ;
        this.tags = data['tags'] ;
        this.gitUrl = data['gitUrl'] ;
        // tslint:disable-next-line:no-shadowed-variable
        this.quesservice.getcode(this.gitUrl, this.uname).subscribe(data => {
          this.code = data['codeTemplate'];  });
        }
        );
  }
  // tslint:disable-next-line:member-ordering
  options = {theme: 'vs-dark'};
  // tslint:disable-next-line:member-ordering
  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  // tslint:disable-next-line:member-ordering
  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: 'foo.json',

  };
  // tslint:disable-next-line:member-ordering
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  // tslint:disable-next-line:member-ordering
  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  // socket code
  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }




  connect() {
    const socket = new SockJS('http://13.234.74.67:8025/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);

      _this.stompClient.subscribe('/topic/hi', function (helo) {
        _this.showGreeting(JSON.parse(helo.body).codeTemplate);
      });
    });
  }
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
  }

  submit() {
    this.greetings = [];
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({'name': this.uname + '@#' + this.code })
    );
  }

 // tslint:disable-next-line:member-ordering
 public colorg: object = {};
 sendDataToSubmissionService() {
      this.quesservice.sendDatatoSubmission({'code': this.code, 'username': this.uname, 'questionId': this.questionId,
      'questionTitle': this.questionTitle, result: this.result,
      'testCasePassed': this.testpass, 'totalTestCases': this.totaltest,
      'difficulty': this.difficulty});
 }
  showGreeting(message) {
    this.greetings.push(message);
    this.greetings = this.greetings[0].split('@*#');
    this.totaltest = this.greetings[0];
    this.testpass = this.greetings[1];
    this.greetings = this.greetings[2].split('\n');
    if (this.greetings[0] === '') {
    this.greetings[0] = 'Tests passed';
  }
    this.colorg = {
      color: `red`
    };
    if ( this.greetings[0] === 'Tests passed') {
      this.result = 'passed';
      this.colorg = {
        color: `green`
      };
    } else {
      this.result = 'failed';
    }
  }

}
