import { SelecaoQuestionarioEntrevistaComponent } from './selecao-questionario-entrevista/selecao-questionario-entrevista.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';

import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './aplicar-question/contextualizacao/painel/painel.component';
import { CicloUmEntrevistaTecnicaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica-funcional/ciclo-um-entrevista-tecnica-funcional.component';
import { CicloUmEntrevistaTecnicaComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica/ciclo-um-entrevista-tecnica.component';
import { DocumentalfuncionalComponent } from './aplicar-question/contextualizacao/documentalfuncional/documentalfuncional.component';

import { TabAuxiliaresComponent } from './tab-auxiliares/tab-auxiliares.component';
import { AnaliseGapComponent } from './analise-gap/analise-gap.component';
import { AplicarQuestionComponent } from './aplicar-question/aplicar-question.component';

import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadPerfilComponent } from './cad-perfil/cad-perfil.component';
import { CicloUmEntrevistaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-funcional/ciclo-um-entrevista-funcional.component';
import { CicloUmEntrevistadocumentalFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-documental-funcional/ciclo-um-entrevistadocumental-funcional.component';



const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'menu', component: PrincipalComponent},
  { path: 'usuario', component: CadUsuarioComponent},
  { path: 'perfil', component: CadPerfilComponent},
  { path: 'Entrevista', component: EntrevistaComponent},
  { path: 'AplicarQuestion', component: AplicarQuestionComponent},
  { path: 'AnaliseGap', component: AnaliseGapComponent},
  { path: 'TabAuxiliar', component: TabAuxiliaresComponent},
  { path: 'painelentrevista', component: PainelComponent},
  { path: 'documentalfuncional', component: DocumentalfuncionalComponent}, 
  { path: 'CicloUmEntrevistaFuncional', component: CicloUmEntrevistadocumentalFuncionalComponent },
  { path: 'CicloUmDocFundional', component: CicloUmEntrevistaFuncionalComponent }, 
  { path: 'CicloUmEntrevistaTecnica', component: CicloUmEntrevistaTecnicaComponent },
  { path: 'CicloUmEntrevistaTecnicaFuncional', component: CicloUmEntrevistaTecnicaFuncionalComponent },
  { path: 'Selecao-Questionario-Entrevista', component: SelecaoQuestionarioEntrevistaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
