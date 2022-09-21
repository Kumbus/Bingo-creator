import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user: User | undefined;
  firstButtonString: string | undefined | null = "Log in";
  secondButtonString: string = "Register"; 
  isLogged: boolean = false;

  constructor()  {}

  getUser(loginUser: any)
  {
    this.user = loginUser;
  }
  


  changeButtonsStrings()
  {
    if(this.isLogged == true)
    {
      this.firstButtonString = this.user?.userName;
      this.secondButtonString = "Logout";
    }
    else
    {
      this.firstButtonString = "Log in"
      this.secondButtonString = "Register"
    }

  }
}
