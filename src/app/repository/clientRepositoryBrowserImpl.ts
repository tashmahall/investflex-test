import { AbstractClientRepository } from './abstractClientRepository';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable()
export class ClientRepositoryBrowserImpl extends AbstractClientRepository{
    proceedLogin(cpf: string, password: string): string {
        console.log(cpf);
        let cadastro = localStorage.getItem(cpf);
        if(cadastro!=null){
          return this.tokenGenerator();
        }else{
            throw new Error("Acesso Negado");
        }
    }    
    
    saveClient(client: Client) {
        throw new Error("Method not implemented.");
    }

    private tokenGenerator(): string{
        var rand = function() {return Math.random().toString(36).substr(2); };// remove `0.`
        var token = function() {return rand() + rand();  };/* to make it longer*/
        return token(); 
    }
}