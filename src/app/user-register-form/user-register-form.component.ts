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
  ageGroup = [];
  selectedAge: any;
  addressSelected: boolean;
  address: string = '';
  interests = '';
  interestList: any;
  imageSrc: any;
  userInfo: any = {};
  editable: Boolean = false;
  abbrevations = [];
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ageGroup = ['13-19', '20-29', '30-45', '45 & Above'];
    this.selectedAge = 1;
    this.addressSelected = false;
    this.abbrevations = ['Mr', 'Mrs', 'Miss', 'Master']
  }

  invalidName() {
    return (this.submitted && this.userForm.controls.abbrevation.errors && this.userForm.controls.firstName.errors != null && this.userForm.controls.lastName.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidAge() {
    return (this.submitted && this.userForm.controls.age.errors != null);
  }

  invalidPhone() {
    return (this.submitted && this.userForm.controls.phone.errors != null);
  }

  invalidState() {
    return (this.submitted && this.userForm.controls.state.errors != null);
  }

  invalidCountry() {
    return (this.submitted && this.userForm.controls.country.errors != null);
  }

  invalidAddress() {
    return (this.submitted && this.userForm.controls.address.errors != null);
  }

  invalidAddress1() {
    return (this.submitted && this.userForm.controls.address1.errors != null);
  }

  invalidAddress2() {
    return (this.submitted && this.userForm.controls.address2.errors != null);
  }

  invalidInterest() {
    return (this.submitted && this.userForm.controls.interest.errors != null);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      abbrevation: ['Mr', Validators.required],
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
    this.userForm.patchValue({
      interest: this.interests
    });
  }

  removeInterest(interest) {
    this.interestList = this.interestList.filter(item => item !== interest);
    this.interests = this.interestList.join(', ');
    this.userForm.patchValue({
      interest: this.interests
    });
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
    this.editable = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
      this.editable = true;
      this.userInfo = this.userForm.value;
      switch (this.userInfo.age) {
        case 0: this.userInfo.age = '13'; break;
        case 1: this.userInfo.age = '20'; break;
        case 2: this.userInfo.age = '30'; break;
        case 3: this.userInfo.age = '45'; break;
      }
      if (this.interestList.length > 1) {
        this.userInfo.interest = '';
        for (let i = 0; i < this.interestList.length;i++) {
          if (this.interestList.length-1 === i) {
            this.userInfo.interest += "</span> and <span class=info-span>" + this.interestList[i];
          } else {
            this.userInfo.interest += ', ' + this.interestList[i];
          }
        } 
      }
    }
  }
}
