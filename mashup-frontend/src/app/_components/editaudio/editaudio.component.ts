import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';
import { NgxEditorModel } from 'ngx-monaco-editor';
import { autocomplete } from './autocomplete';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-editaudio',
  styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }'],
  styleUrls: [],
  templateUrl: './editaudio.component.html',
})
export class EditaudioComponent implements OnInit {
   totaltest: String;
   passed: String;
  // wesocket
  public styleb: object = {};
  title = 'grokonez';
  val = 'true';
  myVar: boolean;
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
  readabilityTime = 20;
  private stompClient = null;
  editorLoadStatus;
  audiopath = '/assets/audio.mp3';
  i = 0;
  mvnDependencyDownload = 0;
  // socket ends here
  auto = new autocomplete;
  selectedLang = 'java';
  editorOptions = { theme: 'vs-light', language: 'java', readOnly: 'true' };
  options = {
    theme: 'vs-dark'
  };

  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: 'foo.json',

  };

  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  public colorg: object = { };
  timeStart: number;
  interval;
  changeReadibility (readValue) {
    this.editorOptions = { theme : 'vs-light', language: 'java', readOnly: readValue };
  }

  onInit(editor) {
    let line = editor.getPosition();
    const monaco = window['monaco'];
    monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    console.log(line);
  }
  constructor() {}

  ngOnInit() {
    console.log(this.code) ;
    this.connect();
  }
  // socket code
  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.greetings = [];
    }
  }
  connect() {
    const socket = new SockJS('http://13.234.74.67:8031/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      this.connectedSocket = true;
      _this.stompClient.subscribe('/topic/hi', function (hello) {
        if ( _this.mvnDependencyDownload > 1) {
          _this.showResults(JSON.parse(hello.body).greeting);
        } else {
          _this.mvnDependencyDownload++;
        }
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
    console.log('submit button');
    console.log(this.code);
    this.greetings = [];
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({ 'name': this.code })
    );
  }

  showResults(output) {
    this.greetings.push(output);
    this.greetings = this.greetings[0].split('#*@');
    this.totaltest = this.greetings[0];
    this.passed = this.greetings[1];
    console.log(this.totaltest);
    console.log(this.passed);
    this.greetings  = this.greetings[2].split('\n');
    this.colorg = {
      color: `red`
    };
    if (this.greetings[0] === 'Tests passed') {
      this.colorg = { color: 'green'};
    }
  }

  startTimer(audio) {
    audio.play();
    this.timeStart = 0;
    this.interval = setInterval(() => {
      if ( this.timeStart === this.readabilityTime) {
        clearInterval(this.interval);
        this.changeReadibility('false');
        this.timeStart++;
      } else {
        this.timeStart++;
      }
    }, 1000);
    this.submit();
  }
}