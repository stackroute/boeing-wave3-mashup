import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { tokenKey } from '@angular/core/src/view';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-savequestion',
  templateUrl: './savequestion.component.html',
  styleUrls: ['./savequestion.component.css']
})
export class SavequestionComponent implements OnInit {

  questionForm: FormGroup;

  public uname: string;
  title = 'Question';
  submitted = false;

  levels: any  = ['-----Select Difficulty------', 'Beginner', 'Intermediate',
            'Advance', 'Expert'];

  get f() {
     return this.questionForm.controls;
  }


  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private _route: ActivatedRoute, public questionservice: QuestionserviceService, private router: Router, private formBuilder: FormBuilder, private alertService: AlertService) { }

  ngOnInit() {
    // this.uname = this._route.snapshot.paramMap.get('username');
    console.log('USERNAME : ' + this.uname);
    this.questionForm = this.formBuilder.group({
      questionTitle: ['', Validators.required],
      questionDescription: ['', Validators.required],
      inputFormat: ['', Validators.required],
      outputFormat: ['', Validators.required],
      difficulty: ['', Validators.required],
      tags: ['', Validators.required],
      gitUrl: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:member-ordering
  obj1: any;
  // tslint:disable-next-line:member-ordering
  add: string;
  submit(): any {
    this.submitted = true;

    if (this.questionForm.invalid) {
      console.log('register form is invalid ');
      return;
    }

   console.log('questionForm: ', this.questionForm.value);
   this.uname = this.token.getUsername();
   // tslint:disable-next-line:label-position
   this.add = '{"username":"' + this.uname + '"}';
   console.log('masse:' + this.add);
    this.obj1  = JSON.parse(this.add);
    console.log(this.obj1);
    const obj2 = Object.assign(this.questionForm.value, this.obj1);

    console.log(obj2);
    this.questionservice.saveQuestion(obj2).pipe(first()).subscribe(
      data => {
        console.log('data is ', data);
        // this.alertService.success(data, true);
        alert(data);
        // this.router.navigate(['/post']);
    },
    error => {
      console.log('we are getting some errors');
      // this.alertService.error('user already exists');
      alert(error);
    }
    );
  }

}
