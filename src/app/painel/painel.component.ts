import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']

})
export class PainelComponent implements OnInit {
  public nome: string;
  private email: string;
  private telefone: number;
  private senha: string;
  public arry = new Array();



  constructor() {

  }

  ngOnInit() {
  }
  SalvaCadastro() {

    this.arry[0] = (document.getElementById('nome') as HTMLInputElement).value;
    this.arry[1] = (document.getElementById('email') as HTMLInputElement).value;
    this.arry[2] = (document.getElementById('tel') as HTMLInputElement).value;
    this.arry[3] = (document.getElementById('pwd') as HTMLInputElement).value;

    for (let i = 0; i < this.arry.length; i++) {
      console.log(this.arry[i]);

    }
  }

  LimpaTela() {
    (document.getElementById('nome') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('tel') as HTMLInputElement).value = '';
    (document.getElementById('pwd') as HTMLInputElement).value = '';
  }

}
