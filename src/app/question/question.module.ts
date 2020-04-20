import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { AplicarEntrevistaComponent } from './aplicar-entrevista/aplicar-entrevista.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';


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
   AplicarEntrevistaComponent,
   EntrevistaComponent,
  ],
   
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }

