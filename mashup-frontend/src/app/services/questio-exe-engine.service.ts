import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  private url = './assets/question.json';
  private url2 ='http://localhost:8069/rest/neo4j/questions/2';
  private url3='http://localhost:8025/api/v1/question';
  constructor(private _http: HttpClient) { }

  
  public getcode(id ,username): any {
    var code =this._http.get(this.url3+"/"+id+"/"+username);
    return code;

  }
  public  findques(): any {
    const trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
