import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formLogin: FormGroup;
  conversao;
  ngOnInit() {
    console.log('Component app-header inciado...');
    this.formLogin = this.formBuilder.group({
      cpf:['']
    })
  }

}
