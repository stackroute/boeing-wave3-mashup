// import { AlertService } from '@/_services';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  // loading = false;
  submitted = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   private authenticationService: AuthenticationService,
  //   private userService: UserService,
  //   private alertService: AlertService
  // ) {
  //   // redirect to home if already logged in
  //   if (this.authenticationService.currentUserValue) {
  //     this.router.navigate(["/"]);
  //   }
  // }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ["", Validators.required],
  //     lastName: ["", Validators.required],
  //     username: ["", Validators.required],
  //     password: ["", [Validators.required, Validators.minLength(6)]],
  //     emailId: ["", Validators.required],
  //     gender: ["", Validators.required],
  //     age: [""],
  //     collegeName: [""],
  //     course: [""],
  //     discipline: [""],
  //     currentCompany: [""]
  //   });
  // }

  // // convenience getter for easy access to form fields
  // get f() {
  //   return this.registerForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     console.log("register form is invalid ");
  //     return;
  //   }

  //   // this.loading = true;
  //   // console.log("registerForm.value : ", this.registerForm.value);
  //   // this.userService.register(this.registerForm.value).subscribe(data => {
  //   //   console.log("data is ", data);
  //   //   this.alertService.success("Registration successful", true);
  //   //   this.router.navigate(["/login"]);
  //   // });

  //   this.loading = true;
  //   console.log("registerForm.value : ", this.registerForm.value);
  //   this.userService.register(this.registerForm.value).subscribe(
  //     data => {
  //       console.log("data is ", data);
  //        this.alertService.success(data, true);
  //        this.loading = false;
  //       // this.router.navigate(["/login"]);
  //     },
  //     error => {
  //       console.log("we are getting some errors");
  //       this.alertService.error("user already exists");
  //       this.loading = false;
  //     }
  //   );
  // }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      interest: ['', Validators.required],
      username: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      gender: [''],
      age: [''],
      college: [''],
      course: [''],
      discipline: [''],
      company: ['']
    });
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.firstFormGroup.invalid) {
        console.log('register form is invalid ');
        return;
      }

      // this.loading = true;
      // console.log("registerForm.value : ", this.registerForm.value);
      // this.userService.register(this.registerForm.value).subscribe(data => {
      //   console.log("data is ", data);
      //   this.alertService.success("Registration successful", true);
      //   this.router.navigate(["/login"]);
      // });

      // this.loading = true;
      const object = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value);
      console.log('registerForm.value : ', object);
      this.userService.register(object).subscribe(
        data => {
          console.log('data is ', data);
           this.alertService.success(data, true);
           alert(data);
          //  this.router.navigate(["/register"]);
        },
        error => {
          console.log('we are getting some errors');
          this.alertService.error('user already exists');
          alert('error');
        }
      );
    }
}
//   error => {
//     this.alertService.error("error is ", error);
//     this.loading = false;
//   }
