import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  private url = './assets/question.json';

  constructor(private _http: HttpClient) { }

  public  findques(): any {
    const trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
