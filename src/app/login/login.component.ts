import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      cpf:['']
    });
  }
  login(){
    console.log(this.formLogin.value);
    let loginCpf = this.formLogin.get('cpf').value;
    let cadastro = localStorage.getItem(loginCpf);
    if(cadastro!=null){
      this.router.navigate(['home-logada']);
    }else{
      this.router.navigate(['acesso-negado']);
    }
    
  }
}
