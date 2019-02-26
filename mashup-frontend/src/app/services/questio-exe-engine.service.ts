import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  private url = './assets/question.json';
  private url3= 'http://13.234.74.67:8092/question-service/api/v1/question/';
  private url2 ='http://localhost:8069/rest/neo4j/questions/2';
  private url4 ='http://172.23.239.150:8026/api/v1/submission';
  constructor(private _http: HttpClient) { }

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
