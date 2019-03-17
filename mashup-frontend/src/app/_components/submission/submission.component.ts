import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SubmissionService } from 'src/app/services/submission.service';

export interface SubmissionData {
  questionId;
  questionTitle: string;
  testCasePassed: string;
  totalTestCases: string;
  difficulty: string;
  score;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  displayedColumns: string[] = ['questionId', 'questionTitle', 'testCasePassed', 'totalTestCases', 'difficulty', 'score'];
  dataSource: MatTableDataSource<SubmissionData>;
  questionId;
  username;
  submissionData;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private submission: SubmissionService, private _route: ActivatedRoute, private token: TokenStorageService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render

  }

  ngOnInit() {

    // this.submission
    this.questionId = this._route.snapshot.paramMap.get('qid');
    this.username = this.token.getUsername();
    this.submission.getSubmission(this.username, this.questionId).subscribe(
      data => {
        this.submissionData = data;
        console.log('Submissiondata:', this.submissionData);
        this.dataSource = new MatTableDataSource(this.submissionData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        // alert(error);
      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): SubmissionData {
//   const title =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//   const try1 = 'HELLO';

//   return {
//     id: id.toString(),
//     title: title,
//     level: Math.round(Math.random() * 100).toString(),
//     tag: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//     try1: try1
//   };
// }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */