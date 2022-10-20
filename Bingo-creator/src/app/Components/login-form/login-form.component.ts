import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { UserService } from '../../Services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private _router: Router,
     private accountService: AccountService) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl(null, [Validators.required])}
    )
   }

  loginForm!: FormGroup;
  

  user: User = {
    userName: '',
    email: '',
    password: ''
  }

  errorMsg!: string;

  ngOnInit(): void {
  }


  login()
  {
    this.user.email = this.loginForm.controls['email'].value;
    this.user.password = this.loginForm.controls['password'].value;

    this.accountService.login(this.user).subscribe({
      next: () => 
      {
        this._router.navigate(['']);
      },
      error: () =>
      { 
        this.errorMsg = "Email or/and password are incorrect";
      }
  });
  }

  showEmailErrorMessage() : string
  {
    if(this.loginForm.controls['email'].hasError('required'))
      return "Email can't be empty"
    else
      return "It isn't email";
  }

}
