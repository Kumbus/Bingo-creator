import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/Services/words.service';
import { Word } from 'src/app/Word';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  constructor(private wordService: WordsService) { }

  word: Word =
  {
    name: ''
  }

  ngOnInit(): void {
  }

  addWord()
  {
    this.wordService.addWord(this.word).subscribe();
    this.word.name = '';
  }

}
