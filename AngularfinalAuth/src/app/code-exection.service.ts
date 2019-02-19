import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CodeExectionService {
  private codeExecutionurl = 'http://localhost:8080/api/v1/post';

  constructor(private _http: HttpClient) { console.log('http service got called in code service'); }

  // public  : String {
  //   template = this._http.get(this.url);
  //   return template;
  //    }
     public fetchtemplate(): Observable<any> {
      // tslint:disable-next-line:prefer-const
      console.log('Code : ');
      const template = this._http.post(this.codeExecutionurl + 'code',  {responseType: 'text'});
      console.log(template);
      return template;
    }
}
