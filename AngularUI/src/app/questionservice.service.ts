import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  public questionPopulatorApidUrl = 'http://13.234.74.67:8092/question-service/api/v1/';

  constructor(private _http: HttpClient) {
    console.log('http service got called');
  }

  public saveQuestion(questionObj): Observable<any> {
    // tslint:disable-next-line:prefer-const
    console.log('QUESTION : ', questionObj);
    const savedQuestionObj = this._http.post(this.questionPopulatorApidUrl + 'question', questionObj, {responseType: 'text'});
    console.log(savedQuestionObj);
    return savedQuestionObj;
  }
}
