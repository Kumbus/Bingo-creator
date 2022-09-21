import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private _router: Router) 
  {
    this.registerForm = this.fb.group({
      nick: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      checkPassword: ['', [Validators.required]]}, 
      { 
        validator: this.checkPasswords('password', 'checkPassword')
      }
    )
   }

  registerForm!: FormGroup;
  

  user: User = {
    userName: '',
    email: '',
    password: ''
  }

  errorMsg!: string;

  ngOnInit(): void {


  }

  register()
  {
    this.user.userName = this.registerForm.controls['nick'].value;
    this.user.email = this.registerForm.controls['email'].value;
    this.user.password = this.registerForm.controls['password'].value;
    console.log(this.user)
    let existingUser: any;
    this.userService.getUserToRegister(this.user.email).subscribe({
      next: () => 
      {
        this.errorMsg = "";
        this.userService.addUser(this.user).subscribe();
        this._router.navigate(['login']);
      },
      error: () => 
      {
        this.errorMsg = "There is an account with this email";
      }
      
    }
    )

    
  }

  showNickErrorMessage() : string
  {
    if(this.registerForm.controls['nick'].hasError('required'))
      return "Nick can't be empty"
    else
      return "Too short nickname";
  }
  showEmailErrorMessage() : string
  {
    if(this.registerForm.controls['email'].hasError('required'))
    return "Email can't be empty"
  else
    return "It isn't email";
  }

  showPasswordErrorMessage() : string
  {
    if(this.registerForm.controls['password'].hasError('required'))
    return "Password can't be empty"
  else
    return "Too short password";
  }

  showCheckPasswordErrorMessage() : string
  {
    if(this.registerForm.controls['checkPassword'].hasError('required'))
      return "It can't be empty"
    else
      return "Passwords are different"
  
  }

  checkPasswords(controlName: string, matchingControlName: string)
  {
    return (formGroup: FormGroup) => 
    {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
        if (matchingControl.errors && !matchingControl.errors['checkPasswords'])
          return;

        if (control.value !== matchingControl.value) 
          matchingControl.setErrors({ confirmedValidator: true });  
        else
          matchingControl.setErrors(null);
    }
  }

}


