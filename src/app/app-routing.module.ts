import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'register',
    component: UserRegisterFormComponent
  },
  {
    path: 'display',
    component: DisplayUserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [UserRegisterFormComponent, DisplayUserInfoComponent];
