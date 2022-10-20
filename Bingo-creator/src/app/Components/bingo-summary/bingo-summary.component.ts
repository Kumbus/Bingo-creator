import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bingo } from 'src/app/Bingo';
import { BingoService } from 'src/app/Services/bingo.service';

@Component({
  selector: 'app-bingo-summary',
  templateUrl: './bingo-summary.component.html',
  styleUrls: ['./bingo-summary.component.scss']
})
export class BingoSummaryComponent implements OnInit {

  constructor(private bingoService: BingoService) { }

  bingoArray!: Observable<Bingo[]>

  bingoTable!: any

  ngOnInit(): void {
    this.bingoArray.subscribe((data) => {
      this.bingoTable = data
      console.log("hej")})
    this.bingoArray = this.bingoService.getBingoToSummary(this.bingoService.mainBingoId)
    
    

    
  }
  

}
