import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  title = '"Az élet egy maszk, amin keresztül a mindenség kifejezi önmagát."';
  title2 = 'Frank Herbert';
  constructor() { }

  ngOnInit(): void {
  }

}
