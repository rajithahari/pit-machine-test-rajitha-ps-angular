import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, AppRoutingModule],
  declarations: [ AppComponent, RegisterComponent, UserRegisterFormComponent, DisplayUserInfoComponent, RoutingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
