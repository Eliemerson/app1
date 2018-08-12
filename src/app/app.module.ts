import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CalculoComponent } from './calculo/calculo.component';
import { PodutosComponent } from './podutos/podutos.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    LoginComponent,
    HomeComponent,
    CalculoComponent,
    PodutosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
