import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../User';
import { catchError, tap, throwError } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private readonly _http: HttpClient) { }

  apiUrl = "https://localhost:7249/api/Users";

  addUser(user: User)
  {
    return this._http.post(`${this.apiUrl}/Register`,user);
  }

  getUserToRegister(email: any)
  {
    return this._http.get(`${this.apiUrl}/Register/${email}`).pipe(catchError((err) => throwError(() => err)))
  }

  login(user: User)
  {
    return this._http.post(`${this.apiUrl}/Login`,user, {responseType: 'text'}).pipe(catchError((err) => throwError(() => err)))
  }

}
