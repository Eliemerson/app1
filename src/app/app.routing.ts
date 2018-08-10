import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import{PainelComponent} from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { CalculoComponent } from './calculo/calculo.component';


const  APP_ROUTES: Routes =[
   {path:'',component: HomeComponent},
   {path:'Cadastro',component:PainelComponent},
   {path:'Login', component:LoginComponent},
   {path:'Calculo', component: CalculoComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);