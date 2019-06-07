import { Component, OnInit } from '@angular/core';
import { StockBoardComponent } from '../stock-board/stock-board.component';

@Component({
  selector: 'app-list-stock-boards',
  templateUrl: './list-stock-boards.component.html',
  styleUrls: ['./list-stock-boards.component.scss']
})
export class ListStockBoardsComponent implements OnInit {
  listStockBoards: Array<StockBoardComponent>;
  constructor() { }

  ngOnInit() {
  }
  addStockBoardComponent(stockBoardComponent:StockBoardComponent): StockBoardComponent[]{
    this.listStockBoards.forEach(stBoardCompTemp => {
      if(stBoardCompTemp.stock.stockCode==stockBoardComponent.stock.stockCode){
        return this.listStockBoards;
      }
    });
    this.listStockBoards.concat(stockBoardComponent);
    return this.listStockBoards;
  }

}
