import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, lastValueFrom, Observable, tap } from 'rxjs';
import { Bingo } from '../Bingo';
import { Word } from '../Word';
import { AccountService } from './account.service';
import { WordsService } from './words.service';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  constructor(private readonly _http: HttpClient, private accountService: AccountService, private wordsService: WordsService, private _router: Router) 
  {
    accountService.isLoggedIn.subscribe((loggedIn) => this.isLogged = loggedIn)
  }

  private apiUrl = "https://localhost:7249/api/Bingo";

  mainBingoId: number | undefined = 0;

  isLogged!: boolean;

  private _bingoArray = new BehaviorSubject<Bingo[]>([]);
  bingoArray = this._bingoArray.asObservable();

  addMainBingo(bingo: Bingo) : any
  {
    return this._http.post(`${this.apiUrl}/Main`, bingo)
  }

  addBingo(bingo: Bingo) : any
  {
    return this._http.post(`${this.apiUrl}`, bingo)
  }

  getBingoToSummary(id: any) : Observable<any>
  {
    return this._http.get(`${this.apiUrl}/Summary/${id}`)
  }

  async createBingoVersion(numberOfBingo: number, mainBingoId: any, words: Word[], x: number, y: number)
  {
    this.mainBingoId = mainBingoId

    let newBingo: Bingo = {
      name: '',
      height: y,
      width: x,
      userId: undefined,
      mainBingoId: mainBingoId
    }

    for(let p = 0; p<words.length;p++)
    {
      words[p].bingoId = mainBingoId
      this.wordsService.updateWord(words[p]).subscribe()
    }
    
    for(let i=0; i<numberOfBingo; i++)
    {


      let temporaryArray: Word[] = [];
      for(let p = 0; p<words.length;p++)
      {
        temporaryArray.push(words[p]);
      }
        

      let max = words.length;

      if(this.isLogged)
        newBingo.userId = this.accountService.user?.id

      this.addBingo(newBingo).subscribe((data: Bingo) => {
        newBingo = data

        for(let j=0; j<y; j++)
        {
          for(let k=0; k<x; k++)
          {
            let index = Math.floor(Math.random() * max)
            let currentWord: Word = temporaryArray[index];
            temporaryArray.splice(index,1)
            max = max - 1;
            currentWord.xPosition = k;
            currentWord.yPosition = j;
            currentWord.bingoId = newBingo.id
            this.wordsService.addWord(currentWord).subscribe()
            
          }
        }

      })
      
      
   
    }

    
  }
}
