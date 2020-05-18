import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';

const routes: Routes = [
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
