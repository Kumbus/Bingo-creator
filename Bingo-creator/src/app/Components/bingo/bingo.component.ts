import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bingo } from 'src/app/Bingo';
import { AccountService } from 'src/app/Services/account.service';
import { BingoService } from 'src/app/Services/bingo.service';
import { PassDataService } from 'src/app/Services/pass-data.service';
import { Word } from 'src/app/Word';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor(private bingoService: BingoService, private passDataService: PassDataService,
     public dialog: MatDialog, private accountService: AccountService, private _router: Router) { }

  bingo: Bingo =
  {
    name: '',
    height: 2,
    width: 2,
    userId: null,
    mainBingoId: null
  }

  fields: Word[] = [];
  allWords: Word[] =[];

  howManyBingo: number = 1;

  isLogged!: boolean



  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe((loggedIn) => this.isLogged = loggedIn)
    this.bingoService.addMainBingo(this.bingo).subscribe((data: Bingo) =>{
      this.bingo = data;
    })

    this.passDataService.wordsSource.subscribe(words => {
      this.allWords = words;
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
    this.fields.splice(0)
    
    for(let i=0; i< this.bingo.height * this.bingo.width; i++)//probably better make an array with evey word and iterate through it to get needed fields
    {
      if(i<this.allWords.length)
        this.fields.push(this.allWords[i])
      else
      {
        let emptyWord: Word =
          {
            name: ""
          }
          this.fields.push(emptyWord)
      }
    }
 
  }

  askQuestion()
  {
    const questionDialogRef = this.dialog.open(QuestionDialogComponent)

    questionDialogRef.afterClosed().subscribe(isConfirmed => {
      if(isConfirmed)
      {
        if(this.isLogged)
        {
          //create input with name to describe bingo
          //in backend add to every bingo main bingo which is template and words - done
          //so every generated configuration will be linked to it and we will be saving only this template
        }
        else
        {
          const loginDialogRef = this.dialog.open(LoginDialogComponent) // it have to open new component because of null injector of dialog
        }
      }
      else
      {
        //change size of main bingo
        if(this.isLogged)
         {} //adding userid to main bingo

        
        this.bingoService.createBingoVersion(this.howManyBingo, this.bingo.id, this.allWords, this.bingo.width, this.bingo.height)
        this._router.navigate(['summary'])
      }
    });
  }

}
