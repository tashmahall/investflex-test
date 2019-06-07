import { Component, OnInit } from '@angular/core';
import { AbstractStockRepository } from '../repository/abstractStockRepository';
import { StockRepositoryFileImpl } from '../repository/stockRepositoryFileImpl';


@Component({
  selector: 'app-stock-board-loader',
  templateUrl: './stock-board-loader.component.html',
  styleUrls: ['./stock-board-loader.component.scss'],
  providers: [
    {provide: AbstractStockRepository,useClass: StockRepositoryFileImpl }
   ]
})
export class StockBoardLoaderComponent implements OnInit {

  constructor(private abstractStockRepository: AbstractStockRepository) { }
    
    stockCode: string;
  ngOnInit() {
  }
  onSelect(stockCode: string): void{
    this.abstractStockRepository.getStockByCode(stockCode);

    
  }

}
