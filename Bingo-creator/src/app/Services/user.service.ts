import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../User';
import { catchError, throwError } from 'rxjs';

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

  getUserToLogin(email: any, password: any)
  {
    return this._http.get(`${this.apiUrl}/Login/${email}/${password}`).pipe(catchError((err) => throwError(() => err)))
  }


}
