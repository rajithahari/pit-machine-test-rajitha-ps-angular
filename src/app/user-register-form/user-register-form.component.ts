import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; //added this line to your module

@Component({
  selector: 'user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.sass']
})
export class UserRegisterFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: any = new FormControl('');
  guid: string;
  ageGroup = [];
  selectedAge = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ageGroup = ['13-19', '20-29', '30-45', '45 & Above'];
    this.selectedAge = '';
  }

  invalidName() {
    return (this.submitted && this.userForm.controls.firstName.errors != null && this.userForm.controls.lastName.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required, [Validators.pattern('^[A-Za-z -]+$')]],
      lastName: ['', Validators.required, [Validators.pattern('^[A-Za-z -]+$')]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      interest: ['', Validators.required],
      isSubscribed: ['']
    });
  }

  ageSelected(event: any) {
    this.selectedAge = this.ageGroup[event.target.value];
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
