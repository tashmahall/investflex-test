import {StockList} from '../model/stockList';
import {Stock} from '../model/stock';
import {AbstractStockRepository} from './abstractStockRepository';
import {Injectable} from '@angular/core';

@Injectable()
export class StockRepositoryFileImpl implements AbstractStockRepository{
    
    getStockByCode(stockCode: string): Stock {
        StockList.forEach(stock => {
            if(stock.stockCode==stockCode)    {
                return stock;
            }
        });
        throw new Error("Stock Code not found");
    }

}