import { Component, OnInit } from '@angular/core';
import { PainelComponent } from 'src/app/painel/painel.component';
import { spawn } from 'child_process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PainelComponent implements OnInit {

  

  EntrarLogin(){
    var nome: any;
    var email: any;
    var telefone: any;
    var senha: any;
  
    email = (document.getElementById("inputEmail") as HTMLInputElement).value;
    senha = (document.getElementById("inputPassword") as HTMLInputElement).value;
    
  }
  ngOnInit() {
  }

}
