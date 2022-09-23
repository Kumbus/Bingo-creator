import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../Word';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private readonly _http: HttpClient) { }

  apiUrl = "https://localhost:7249/api/Words";

  addWord(word: Word)
  {
    return this._http.post(this.apiUrl, word)
  }

  getWords() : Observable<any>
  {
    return this._http.get(this.apiUrl)
  }

  updateWord(word: Word)
  {
    return this._http.put(this.apiUrl, word);
  }

  deleteWord(id: number | undefined)
  {
    return this._http.delete(`${this.apiUrl}/${id}`)
  }
}
