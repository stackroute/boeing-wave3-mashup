import { QuestionserviceService } from './questionservice.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  public tag;
  public fetchURL = 'http://localhost:8097/api/v1/question/';
  public getinfo = 'http://localhost:8097/api/v1/searched';
  constructor(private httpclient: HttpClient) { }

  public findQuestion(tag): Observable<any> {
    const info = this.httpclient.get(this.fetchURL + tag);
    console.log( tag + info);
    return info;
  }

  // public searchQuestion(): any {
  //   const info = this.httpclient.get(this.fetchURL + this.getinfo + '&format=json');
  //   return info;
  // }
}
