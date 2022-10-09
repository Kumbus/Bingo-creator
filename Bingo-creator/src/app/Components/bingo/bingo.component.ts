import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bingo } from 'src/app/Bingo';
import { AccountService } from 'src/app/Services/account.service';
import { BingoService } from 'src/app/Services/bingo.service';
import { PassDataService } from 'src/app/Services/pass-data.service';
import { Word } from 'src/app/Word';
import { LoginFormComponent } from '../login-form/login-form.component';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor(private bingoService: BingoService, private passDataService: PassDataService, public dialog: MatDialog, private accountService: AccountService) { }

  bingo: Bingo =
  {
    name: '',
    height: 5,
    width: 5,
    userId: null
  }

  fields: Word[] = []

  howManyBingo: number = 1;



  ngOnInit(): void {

    this.passDataService.wordsSource.subscribe(words => {
      this.fields.splice(0)
      
      for(let i=0; i< this.bingo.height * this.bingo.width; i++)
      {
          if(i < words.length)
            this.fields.push(words[i])
          else
          {
            let emptyWord: Word =
            {
              name: ""
            }
            this.fields.push(emptyWord)
          }
      }
    }); 
  }

  getStyles()
  {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.bingo.width}, minmax(8rem, 1fr))`,
      'grid-auto-rows': '1fr',
      'font-size': 'larger',
      'margin': '5px'    
    };
  }

  onSizeChange()
  {

    let temporaryArray: Word[] = [];
    for(let i=0; i< this.fields.length; i++)
    {
      temporaryArray.push(this.fields[i])
    }
    
    this.passDataService.changeWords(temporaryArray)
     
  }

  askQuestion()
  {
    const questionDialogRef = this.dialog.open(QuestionDialogComponent)

    questionDialogRef.afterClosed().subscribe(isConfirmed => {
      if(isConfirmed)
      {
        if(this.accountService.isLogged)
        {
          //do something
        }
        else
        {
          const loginDialogRef = this.dialog.open(LoginFormComponent)
        }
      }
    });
  }

}
