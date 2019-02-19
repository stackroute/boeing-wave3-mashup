import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  // private url = './assets/question.json';
  private url = 'http://localhost:8080/api/v1/fetch';

  constructor(private _http: HttpClient) { }

  public  findques(): any {
    const trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
