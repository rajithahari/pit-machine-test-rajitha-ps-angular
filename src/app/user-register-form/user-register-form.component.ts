import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  selectedAge: number;
  addressSelected: boolean;
  address:string = '';
  interests = '';
  interestList = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ageGroup = ['13-19', '20-29', '30-45', '45 & Above'];
    this.selectedAge = 1;
    this.addressSelected = false;
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
    this.selectedAge = event.target.value;
  }

  ageLabelSelected(index) {
    this.selectedAge = index;
  }

  selectAddress(event: any) {
    this.addressSelected = true;
    this.address = event.target.value;
  }

  selectInterests(event: any) {
    this.interests = event.target.value;
    this.interestList = this.interests.split(', ');
    this.interestList = this.interestList.filter(Boolean);
  }

  removeInterest(interest) {
    this.interestList = this.interestList.filter(item => {return item === !interest}); 
    this.interests = this.interestList.join(', ');
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
