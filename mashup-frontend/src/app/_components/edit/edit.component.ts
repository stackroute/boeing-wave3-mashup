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
  styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }'],
  styleUrls: [],
  templateUrl: './edit.component.html'


})
export class EditComponent implements OnInit {

  // wesocket
  title = 'grokonez';
  public difficulty:String;
  public uname:String;
  public testpass:String;
  public totaltest:String;
  description = 'Angular-WebSocket Demo';

  greetings: string[] = [];

  disabled = true;
  // name: string;
  code = `public class Employee {
    public  String addEmployeeEmailId(String emailId){

        return null;
    }
}
`;
  private stompClient = null;
  // socket ends here
  questionObj:String;
  result:String;
  auto = new autocomplete;
  // questitle: string;
  // qid:string;
  // quesstatement: string;
  // questioninputs: string;
  // questionout: string;
  questionId;
    questionTitle: String;
    questionDescription: String ;
    inputFormat: String;
    outputFormat: String;
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
    console.log(line);
  }
  constructor(public quesservice: QuestioExeEngineService, private _route: ActivatedRoute,private token: TokenStorageService) {
  }
  ngOnInit() {
    this.questionId=this._route.snapshot.paramMap.get('qid');
    this.uname = this.token.getUsername();
      
    console.log(this.questionId);
    console.log(this.uname);
    this.connect();
    // tslint:disable-next-line:max-line-length
    // {"questionId":1,"questionTitle":"Awesome1","questionDescription":"Question2","inputFormat":"input format","outputFormat":"output Format","difficulty":"Intermediate","tags":"java","gitUrl":"url","username":"def"}
     this.quesservice.getQuestionById(this.questionId).subscribe(
      data => {
       this.questionObj = data;
        // this.questitle = data['questionTitle'];
        // this.quesstatement = data['questionDescription'];
        // this.questioninputs = data['inputFormat'];
        // this.questionout = data['outputFormat'];
        // this.difficulty=data['difficulty'];
        this.questionId = data['questionId'];
        this.questionTitle = data['questionTitle'] ;
        this.questionDescription = data['questionDescription'] ;
        this.inputFormat = data['inputFormat'] ;
        this.outputFormat = data['outputFormat'] ;
        this.difficulty = data['difficulty'] ;
        this.tags = data['tags'] ;
        this.gitUrl = data['gitUrl'] ;
        console.log(data);
      });
  }
    //  "username":this.uname,"questionId":this.qid,
    //  "questionTitle":this.questitle,result:this.result,
    //  "testCasePassed":this.testpass,"TotalTestCases":this.totaltest,
    //  "difficulty":this.difficulty
  options = {
    theme: 'vs-dark'
  };
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
    const socket = new SockJS('http://localhost:8025/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

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
    console.log('Disconnected!');
  }

  submit() {
    console.log("From here");
     console.log(this.questionObj);
    //console.log(this.code);
    this.greetings = [];
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({'codeWritten': this.code })
    );
    console.log("sending data to submission service");
    //this.sendDataToSubmissionService();
  }
 // tslint:disable-next-line:member-ordering
 public colorg: object = {};
 sendDataToSubmissionService(){
   //console.log("ayhshd");
      this.quesservice.sendDatatoSubmission({"code":this.code,"username":this.uname,"questionId":this.questionId,
      "questionTitle":this.questionTitle,result:this.result,
      "testCasePassed":this.testpass,"totalTestCases":this.totaltest,
      "difficulty":this.difficulty})
 }
  showGreeting(message) {
    this.greetings.push(message);
    this.greetings=this.greetings[0].split('@*#');
    this.totaltest=this.greetings[0];
    this.testpass=this.greetings[1];
    this.greetings = this.greetings[2].split('\n');
    this.colorg = {
      color: `red`
    };
    if ( this.greetings[0] === 'Tests passed' ) {
      this.result="passed";
      this.colorg = {
        color: `green`
      };
    }
    else{
      this.result="failed";
    }
  }

}