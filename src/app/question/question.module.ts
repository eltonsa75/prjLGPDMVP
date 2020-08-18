import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './../authentication.service';
import { AuthGuardService } from './../auth-guard.service';



import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


import { QuestionRoutingModule } from './question-routing.module';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadPerfilComponent } from './cad-perfil/cad-perfil.component';
import { AplicarQuestionComponent } from './aplicar-question/aplicar-question.component';
import { AnaliseGapComponent } from './analise-gap/analise-gap.component';
import { TabAuxiliaresComponent } from './tab-auxiliares/tab-auxiliares.component';


import { EntrevistafuncionalComponent } from './aplicar-question/contextualizacao/entrevistafuncional/entrevistafuncional.component';
import { DocumentalfuncionalComponent } from './aplicar-question/contextualizacao/documentalfuncional/documentalfuncional.component';
import { CicloUmEntrevistadocumentalFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-documental-funcional/ciclo-um-entrevistadocumental-funcional.component';
import { CicloUmEntrevistaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-funcional/ciclo-um-entrevista-funcional.component';
import { CicloUmEntrevistaTecnicaComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica/ciclo-um-entrevista-tecnica.component';
import { CicloUmEntrevistaTecnicaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica-funcional/ciclo-um-entrevista-tecnica-funcional.component';
import { ProgressoComponent } from './aplicar-question/contextualizacao/entrevistafuncional/progresso/progresso.component';
import { PainelComponent } from './aplicar-question/contextualizacao/painel/painel.component';
import { PrincipalComponent } from './principal/principal.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';

import { SelecaoQuestionarioEntrevistaComponent } from './selecao-questionario-entrevista/selecao-questionario-entrevista.component';
import { RegisterComponent } from './register/register.component';
import { ConsultaEntrevistaComponent } from './consulta-entrevista/consulta-entrevista.component';

/**
 * Essa página subistiu o app.module
 */


@NgModule({
  declarations: [  
   CadUsuarioComponent,
   CadPerfilComponent,
   AplicarQuestionComponent, 
   AnaliseGapComponent, 
   TabAuxiliaresComponent,
   EntrevistafuncionalComponent,
   DocumentalfuncionalComponent,
   CicloUmEntrevistadocumentalFuncionalComponent,
   CicloUmEntrevistaFuncionalComponent,
   CicloUmEntrevistaTecnicaComponent,
   CicloUmEntrevistaTecnicaFuncionalComponent,
   ProgressoComponent,
   PainelComponent,
   LoginComponent,
   PrincipalComponent,
   EntrevistaComponent,
   SelecaoQuestionarioEntrevistaComponent,
   ProfileComponent,
   RegisterComponent,
   ConsultaEntrevistaComponent,
  ],
   
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],

  providers: [AuthenticationService, AuthGuardService, AuthGuardService ],
})
export class QuestionModule { }

