import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable()
export abstract class AbstractStockRepository {
  /**
   * Returns a list of .
   */
  abstract getStockByCode(stockCode: string): Stock;
}