import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileServiceService {
  // acd = [ 'hffh', 'fgdgdg'];
  private userProfileUrl = 'http://13.234.74.67:8092/userprofile-service/api/v1/';
  constructor(private http: HttpClient) { }
  public getUserProfile(userName): Observable <any> {
    // tslint:disable-next-lin
    const userProfile = this.http.get('http://13.234.74.67:8092/userprofile-service/api/v1/userprofile/' + userName);
    console.log('hii');
    // console.log(userProfile);
     return userProfile;
  }
}