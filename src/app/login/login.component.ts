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
    
    var painel1 = new PainelComponent();

    email = (document.getElementById("inputEmail") as HTMLInputElement).value;
    senha = (document.getElementById("inputPassword") as HTMLInputElement).value;
    
  console.log("Passou");
    for(var i=0; i < painel1.arry.length; i++){
      console.log(painel1.arry[i]);
 
     }
    
  }
  ngOnInit() {
  }

}
