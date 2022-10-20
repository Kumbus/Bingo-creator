import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { BingoSummaryComponent } from './Components/bingo-summary/bingo-summary.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { AccountGuard } from './Services/account.guard';

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
    component: AccountComponent,
    canActivate: [AccountGuard]
  },
  {
    path: 'summary',
    component: BingoSummaryComponent
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
