import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RegisterComponent, UserRegisterFormComponent, DisplayUserInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
