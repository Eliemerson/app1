import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import{PainelComponent} from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { CalculoComponent } from './calculo/calculo.component';
import { PodutosComponent } from './podutos/podutos.component';

const  APP_ROUTES: Routes =[
   {path:'',component: HomeComponent},//path: caminho, Component: faz chamada para renderizar um component
   {path:'Cadastro',component:PainelComponent},
   {path:'Login', component:LoginComponent},
   {path:'Calculo', component: CalculoComponent},
   {path:'Produtos', component: PodutosComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); // variavel que contem definição das configuração das rotas 