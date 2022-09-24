import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bingo } from '../Bingo';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  constructor(private readonly _http: HttpClient) { }

  apiUrl = "https://localhost:7249/api/Bingo";

  addBingo(bingo: Bingo) : any
  {
    return this._http.post(this.apiUrl, bingo)
  }
}
