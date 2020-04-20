import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
  import { from } from 'rxjs';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TopoComponent } from './topo/topo.component';

import * as $ from 'jquery';
import { AuthService } from './question/login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PaginaNaoEncontradaComponent,
    TopoComponent,
  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
