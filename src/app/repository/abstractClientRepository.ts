import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Client } from '../model/client';

@Injectable()
export abstract class AbstractClientRepository {
  /**
   * Returns a list of .
   */
  abstract proceedLogin(cpf: string,password: string): string;
  abstract saveClient(client: Client);
}