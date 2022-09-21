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

  get isLogged(){
    return this.accountService.isLogged
  }

  constructor(private accountService: AccountService, private _router: Router) { }

  ngOnInit(): void { 
  }

  firstButtonClick()
  {
    console.log(this.isLogged)
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
        this.accountService.isLogged = false;
        this.accountService.changeButtonsStrings();
      }
  }

}
