import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-stock-board',
  templateUrl: './stock-board.component.html',
  styleUrls: ['./stock-board.component.scss']
})
export class StockBoardComponent implements OnInit {

  constructor() { }
  stock: Stock;
  ngOnInit() {
  }


}
