import { Component, OnInit } from '@angular/core';
import { Bingo } from 'src/app/Bingo';
import { BingoService } from 'src/app/Services/bingo.service';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor(private bingoService: BingoService) { }

  bingo: Bingo =
  {
    name: '',
    height: 5,
    width: 5,
    userId: null
  }

  fields: string[] = []

  ngOnInit(): void {
    //this.bingoService.addBingo(this.bingo).subscribe((data: Bingo) => this.bingo = data);
    for(let i=1; i <= this.bingo.height * this.bingo.width; i++)
    {
      this.fields.push(i*9 as unknown as string);
    }
  }

  getStyles()
  {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.bingo.width}, minmax(50px, 150px))`,
      'grid-auto-rows': '1fr',
      'place-items': 'stretch',
      'gap': '2%'
    };
  }

  onSizeChange()
  {
    this.fields.splice(0);
    for(let i=1; i <= this.bingo.height * this.bingo.width; i++)
    {
      this.fields.push(i*9 as unknown as string);
    }
  }

}
