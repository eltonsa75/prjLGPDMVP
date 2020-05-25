
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
  import { from } from 'rxjs';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TopoComponent } from './topo/topo.component';



import * as $ from 'jquery';



import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';





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
    ReactiveFormsModule, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
