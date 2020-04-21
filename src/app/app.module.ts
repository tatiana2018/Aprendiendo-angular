import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //sirve para formularios y el databinding
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http'; //sirve para poder trabajar con peticiones sin esto no sirve
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [ 
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
    
  ],
  imports: [ //importo los modulos creados ,nativos o importados
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [ //cargo los servicios
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }