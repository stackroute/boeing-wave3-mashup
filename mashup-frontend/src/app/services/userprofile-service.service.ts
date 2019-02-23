import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileServiceService {
  // acd = [ 'hffh', 'fgdgdg'];
  private userProfileUrl = 'http://localhost:8024/userprofile-service/api/v1/';
  constructor(private http: HttpClient) { }
  public getUserProfile(userName): Observable <any> {
    // tslint:disable-next-lin
    console.log('USERNAME : ',userName);
    const userProfile = this.http.get('http://localhost:8024/api/v1/userprofile/' + userName);
    console.log('hii');
    // console.log(userProfile);
     return userProfile;
  }
}
