import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileServiceService {
  acd = [ 'hffh', 'fgdgdg'];
  private userProfileUrl = 'http://172.23.239.121:8082/api/v1/';
  constructor(private http: HttpClient) { }
  public getUserProfile(userName): Observable <any> {
    // tslint:disable-next-lin
    const userProfile = this.http.get('http://172.23.239.121:8082/api/v1/userprofile/0');
    console.log('hii');
    // console.log(userProfile);
     return userProfile;
  }
}
