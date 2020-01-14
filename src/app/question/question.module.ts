import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListaComponent } from './question-lista/question-lista.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadPerfilComponent } from './cad-perfil/cad-perfil.component';
import { ConfigQuestionComponent } from './config-question/config-question.component';
import { AplicarQuestionComponent } from './aplicar-question/aplicar-question.component';
import { AnaliseGapComponent } from './analise-gap/analise-gap.component';
import { TabAuxiliaresComponent } from './tab-auxiliares/tab-auxiliares.component';
import { EntrevistafuncionalComponent } from './aplicar-question/contextualizacao/entrevistafuncional/entrevistafuncional.component';
import { DocumentalfuncionalComponent } from './aplicar-question/contextualizacao/documentalfuncional/documentalfuncional.component';

@NgModule({
  declarations: [
    QuestionListaComponent, 
    CadUsuarioComponent,
    CadPerfilComponent,
    ConfigQuestionComponent,
    AplicarQuestionComponent, 
    AnaliseGapComponent, 
    TabAuxiliaresComponent, EntrevistafuncionalComponent, DocumentalfuncionalComponent,],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
