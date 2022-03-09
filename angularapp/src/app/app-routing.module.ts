import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { showHeader: false, showFooter: false }
    // outlet: 'popup'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { showHeader: false, showFooter: false }
    // outlet: 'popup'
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
