import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  private url = './assets/question.json';
  private url2 ='http://localhost:8069/rest/neo4j/questions/2';
  constructor(private _http: HttpClient) { }

  
  public  findques(): any {
    const trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
