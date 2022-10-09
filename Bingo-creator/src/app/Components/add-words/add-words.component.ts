import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PassDataService } from 'src/app/Services/pass-data.service';
import { WordsService } from 'src/app/Services/words.service';
import { Word } from 'src/app/Word';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  constructor(private wordService: WordsService, private passDataService: PassDataService) { }

  words!: Word[];
  displayedColumns: string[] = ["name"];

  word: Word =
  {
    name: ''
  }

  ngOnInit(): void {
      this.wordService.getWords().subscribe((data) => {
        this.words = data;
        this.passDataService.changeWords(this.words);
      })
  }

  addWord()
  {
    this.wordService.addWord(this.word).subscribe(() =>{
      this.wordService.getWords().subscribe((data) => {
        this.words = data;
        this.passDataService.changeWords(this.words);
      })
    });
    

    

    this.word.name = '';
  }

  onWordChange(changedWord: Word)
  {
    this.wordService.updateWord(changedWord).subscribe(() =>
      this.passDataService.changeWords(this.words)
    );
  }

  deleteWord(id: number | undefined)
  {
    this.wordService.deleteWord(id).subscribe(() =>
    {
      this.wordService.getWords().subscribe((data) => {
        this.words = data;
        this.passDataService.changeWords(this.words);
      })
    });
  }

}
