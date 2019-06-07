import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formCadastro;

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: [''],
      cpf:[''],
      email: [''],
      telefone:[''],
      endereco:['']
    });
  }
  cadastro(){
    let conversao = JSON.stringify(this.formCadastro.value);
    localStorage.setItem(this.formCadastro.get('cpf').value, conversao);
  
 
  }

}
