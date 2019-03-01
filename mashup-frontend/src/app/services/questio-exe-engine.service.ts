import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService { 
  private url = './assets/question.json';
  private url3= 'http://13.234.74.67:8092/question-service/api/v1/question/';
  private url2 ='http://13.234.74.67:8092:8069/rest/neo4j/questions/2';
  private url4 ='http://13.234.74.67:8026/api/v1/submission';
  private url5 ='http://13.234.74.67:8026/api/v1/question';
  constructor(private _http: HttpClient) { }


  public getcode(id,username):any{
    var code=this._http.get(this.url5+"/"+id+"/"+username);
    return code;
  }
  public sendDatatoSubmission(quesresultdata){
    console.log(quesresultdata);
               this._http.post(this.url4,quesresultdata).subscribe();
  }
  public getQuestionById(id): any {
    console.log('ID : ' + id);
    const quest = this._http.get(this.url3 + id);
    console.log(quest);
    return quest;
  }
  public  findques(): any {
    const trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
