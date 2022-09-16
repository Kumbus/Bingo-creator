import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  registerForm = this.fb.group({
    nick: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    checkPassword: ['', Validators.required]
  })

  user: User = {
    userName: '',
    email: '',
    password: ''
  }

  ngOnInit(): void {


  }

  register()
  {
    this.user.userName = this.registerForm.controls.nick.value;
    this.user.email = this.registerForm.controls.email.value;
    this.user.password = this.registerForm.controls.password.value;
    console.log(this.user)
    this.userService.addUser(this.user).subscribe();
  }

  showNickErrorMessage() : string
  {
    return "Too short nickname";
  }
  showEmailErrorMessage() : string
  {
    return "Too short nickname";
  }

  showPasswordErrorMessage() : string
  {
    return "Too short nickname";
  }

  showCheckPasswordErrorMessage() : string
  {
    return "Too short nickname";
  }

}
