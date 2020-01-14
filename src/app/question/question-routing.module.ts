import { DocumentalfuncionalComponent } from './aplicar-question/contextualizacao/documentalfuncional/documentalfuncional.component';
import { EntrevistafuncionalComponent } from './aplicar-question/contextualizacao/entrevistafuncional/entrevistafuncional.component';
import { TabAuxiliaresComponent } from './tab-auxiliares/tab-auxiliares.component';
import { AnaliseGapComponent } from './analise-gap/analise-gap.component';
import { AplicarQuestionComponent } from './aplicar-question/aplicar-question.component';
import { ConfigQuestionComponent } from './config-question/config-question.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';

import { QuestionListaComponent } from './question-lista/question-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadPerfilComponent } from './cad-perfil/cad-perfil.component';


const routes: Routes = [
  { path: '', component: QuestionListaComponent},
  { path: 'usuario', component: CadUsuarioComponent},
  { path: 'perfil', component: CadPerfilComponent},
  { path: 'ConfigQuestion', component: ConfigQuestionComponent},
  { path: 'AplicarQuestion', component: AplicarQuestionComponent},
  { path: 'AnaliseGap', component: AnaliseGapComponent},
  { path: 'TabAuxiliar', component: TabAuxiliaresComponent},
  { path: 'entrevista', component: EntrevistafuncionalComponent},
  { path: 'documentalfuncional', component: DocumentalfuncionalComponent}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
