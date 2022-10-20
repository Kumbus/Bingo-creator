import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoSummaryComponent } from './bingo-summary.component';

describe('BingoSummaryComponent', () => {
  let component: BingoSummaryComponent;
  let fixture: ComponentFixture<BingoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
