import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../User';
import { UserService } from './user.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user: User = {
    userName: null,
    email: null,
    password: null
  };

  firstButtonString: string | undefined | null = "Log in";
  secondButtonString: string = "Register"; 
  

  private _isLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedIn = this._isLoggedIn.asObservable();
  private readonly tokenName = "authToken"
  get token()
  {
    return localStorage.getItem(this.tokenName)!;
  }
  helper = new JwtHelperService()

  constructor(private userService: UserService)  
  {
    
    if(this.token && this.helper.isTokenExpired(this.token) == false)
    {
      this._isLoggedIn.next(true)
      this.changeStringsToLoggedIn()
    }
    else
    {
      this._isLoggedIn.next(false)
      this.changeStringsToLoggedOut();
    }
    

  }


  login(user: User)
  {
    return this.userService.login(user).pipe(tap((token: string) =>
    {
      this._isLoggedIn.next(true)
      localStorage.setItem(this.tokenName , token)
    
      this.changeStringsToLoggedIn();
    }))
  }

  logOut()
  {
    localStorage.removeItem(this.tokenName)
    this._isLoggedIn.next(false)
    this.changeStringsToLoggedOut();
  }
  

  changeStringsToLoggedIn()
  {
    const decodedToken = this.helper.decodeToken(this.token)
    this.user.userName = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      
    this.firstButtonString = this.user?.userName;
    this.secondButtonString = "Logout";
  }

  changeStringsToLoggedOut()
  {
    this.firstButtonString = "Log in"
    this.secondButtonString = "Register"
  }

}
