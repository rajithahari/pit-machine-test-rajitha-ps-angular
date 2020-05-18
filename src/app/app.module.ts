import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule],
  declarations: [ AppComponent, RegisterComponent, UserRegisterFormComponent, DisplayUserInfoComponent, RoutingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
