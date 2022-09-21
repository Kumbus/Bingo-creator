import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '',
    component: MainPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
