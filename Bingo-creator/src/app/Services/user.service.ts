import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _http: HttpClient) { }

  addUser(user: User)
  {
    console.log(user)
    return this._http.post("https://localhost:7249/api/Users/Register",user);
  }
}
