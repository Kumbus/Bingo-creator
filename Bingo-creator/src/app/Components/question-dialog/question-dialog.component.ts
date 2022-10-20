import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {

  constructor(private accountService: AccountService, public dialogRef: MatDialogRef<QuestionDialogComponent>) { }

  questionString: string = ""

  isLogged!: boolean

  ngOnInit(): void {

    this.accountService.isLoggedIn.subscribe((loggedIn) => this.isLogged = loggedIn)
    if(this.isLogged)
      this.questionString = "Would you like to save this bingo?";
    else  
      this.questionString = "You are not logged in. Would you like to log in and have a possibility to save?"
  }

  closeDialog(isConfiremd: boolean)
  {
    this.dialogRef.close(isConfiremd);
  }

}
