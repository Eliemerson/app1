import { Component, OnInit } from '@angular/core';
import { parseIntAutoRadix } from '../../../node_modules/@angular/common/src/i18n/format_number';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  private numero1: number;
  private numero2: number;
  private btnSomar: HTMLElement;
  constructor() { }

  ngOnInit() { }
  Evento() {
    console.log('botão clicado');
    this.numero1 = parseInt((document.getElementById('soma') as HTMLInputElement).value, null);
    this.numero2 = parseInt((document.getElementById('soma2') as HTMLInputElement).value, null);
    this.btnSomar = document.getElementById('btnSomar');
    (document.getElementById('total') as HTMLInputElement).value = (this.numero1 + this.numero2).toString();
  }
}
