import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Word } from '../Word';


@Injectable({
  providedIn: 'root'
})
export class PassDataService {


  constructor() { }

  public editDataDetails: any = [];
  //public subject = new Subject<any>();
   wordsSource = new  BehaviorSubject(this.editDataDetails);
  //currentWords = this.wordsSource.asObservable();
  changeWords(words: Word[]) 
  {
    console.log(words)
    this.wordsSource.next(words)
    
  }

}
