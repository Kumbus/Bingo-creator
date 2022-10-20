import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  get firstButtonString(){
    return this.accountService.firstButtonString
  }

  get secondButtonString(){
    return this.accountService.secondButtonString
  }

  isLogged!: boolean;

  constructor(private accountService: AccountService, private _router: Router) 
  {
    accountService.isLoggedIn.subscribe((_isLogged) => this.isLogged = _isLogged);
   }

  ngOnInit(): void { 
  }

  firstButtonClick()
  {
    if(!this.isLogged)
      this._router.navigate(['login'])
    else
      this._router.navigate(['account'])
  }

  secondButtonClick()
  {
    if(!this.isLogged)
      this._router.navigate(['register'])
    else
      {
        this.accountService.logOut();
      }
  }

}
