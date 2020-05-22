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
  selectedAge: any;
  addressSelected: boolean;
  address: string = '';
  interests = '';
  interestList = [];
  imageSrc: any;
  userInfo: any = {};

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
    // let phoneNumberPattern = "^(\+\d{1,3}[- ]?)?\d{10}+$";
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z -]*')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z -]*')]],
      email: ['', [Validators.required, Validators.email]],
      age: [1, Validators.required],
      phone: ['', [Validators.required]],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      interest: ['', Validators.required],
      isSubscribed: [1],
      file: ['', Validators.required]
    });
  }

  ageSelected(event: any) {
    this.selectedAge = event.target.value;
    this.handleAgeClass();
  }

  ageLabelSelected(index) {
    this.selectedAge = index;
    this.handleAgeClass();
  }

  handleAgeClass() {
    let element: HTMLElement;
    for (var index in this.ageGroup) {
      element = document.getElementById('spanAge_' + index) as HTMLElement;
      if (index === this.selectedAge) {
        element.className = 'col-sm-3 active age-group-span';
      } else {
        element.className = 'col-sm-3 age-group-span';
      }
    }
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
    this.interestList = this.interestList.filter(item => item !== interest);
    this.interests = this.interestList.join(', ');
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageSrc = event.target.result;
        this.userForm.patchValue({
          file: event.target.result
        })
      }
    }
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.getElementById('browseFile') as HTMLElement;
    element.click();
  }

  editProfile() {
    this.submitted = false;
  }

  onSubmit() {
    console.log(this.userForm.value);
    if (this.userForm.invalid === true) {
      return;
    } else {
      this.submitted = true;
      this.userInfo = this.userForm.value;
      
    }
  }
}
