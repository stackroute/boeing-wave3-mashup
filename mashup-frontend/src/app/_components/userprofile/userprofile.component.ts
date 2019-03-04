import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { UserprofileServiceService } from '../../services/userprofile-service.service';
import { Token } from '@angular/compiler';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ScorebadgeService } from 'src/app/services/scorebadge.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydroge ns rdctf dgfdhbcm dvi dkgfdvd dfg fdgdfgf dfgfdg dfgdfg dffhdg guhny'},
//   {position: 2, name: 'Heliumwegfhdgcufyiguohef eft udjqe  qetuyg qeqiqyhdg qef'},
//   {position: 3, name: 'Lithium'},
//   {position: 4, name: 'Beryllium'},
// ];

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileState: string;
  profile;
  public uname: string;
  // for getting data from scoreand badge service (added by pratima on 27th feb2019)
  public userData = {};
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private userService: UserprofileServiceService, private scorebadgeservice: ScorebadgeService) { }
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 4, color: 'white'},
    {text: 'Two', cols: 2, rows: 4, color: 'white'},
    {text: 'three', cols: 1, rows: 4, color: 'grey'},
  ];
  // displayedColumns: string[] = ['position', 'name'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  updateProfile() {
    this.profileState = 'updatingProfile';
  }
  ngOnInit() {
    this.uname = this.token.getUsername();
    this.userService.getUserProfile(this.uname).subscribe(data => this.profile = data);
    console.log('User Profile : ', this.profile);
    this.profileState = 'currentProfile';
    // call score and badge service to get data(added by pratima on 27th feb2019)
    this.scorebadgeservice.getUserData(this.uname).subscribe(
      data => {
       this.userData = data;
        console.log('Data is ', data);
    },
      error => {
        alert(error);
      }
    );

  }

}
