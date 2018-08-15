import { Component, OnInit } from '@angular/core';
import { PainelComponent } from 'src/app/painel/painel.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PainelComponent implements OnInit {

  EntrarLogin() { }
  ngOnInit() { }

}
