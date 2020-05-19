import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.sass']
})
export class UserRegisterFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.firstName.errors != null);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.lastName.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.pattern('^[a-zA-Z]{20}')],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      interests: ['', Validators.required],
      isSubscribed: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
      const data = this.userForm.value;
    }
  }
}
