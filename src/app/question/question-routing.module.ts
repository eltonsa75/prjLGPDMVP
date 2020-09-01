import { FormClienteComponent } from './FormCliente/form-cliente/form-cliente.component';
import { ConsultaEntrevistaComponent } from './consulta-entrevista/consulta-entrevista.component';
import { RegisterComponent } from './register/register.component';

import { SelecaoQuestionarioEntrevistaComponent } from './selecao-questionario-entrevista/selecao-questionario-entrevista.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';

import { PrincipalComponent } from './principal/principal.component';

import { PainelComponent } from './aplicar-question/contextualizacao/painel/painel.component';
import { CicloUmEntrevistaTecnicaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica-funcional/ciclo-um-entrevista-tecnica-funcional.component';
import { CicloUmEntrevistaTecnicaComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-tecnica/ciclo-um-entrevista-tecnica.component';
import { DocumentalfuncionalComponent } from './aplicar-question/contextualizacao/documentalfuncional/documentalfuncional.component';

import { TabAuxiliaresComponent } from './tab-auxiliares/tab-auxiliares.component';
import { AnaliseGapComponent } from './analise-gap/analise-gap.component';
import { AplicarQuestionComponent } from './aplicar-question/aplicar-question.component';

import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadPerfilComponent } from './cad-perfil/cad-perfil.component';
import { CicloUmEntrevistaFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-funcional/ciclo-um-entrevista-funcional.component';
import { CicloUmEntrevistadocumentalFuncionalComponent } from './aplicar-question/CiclodeVida01_GeracaoColetaProducao/ciclo-um-entrevista-documental-funcional/ciclo-um-entrevistadocumental-funcional.component';


import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './../auth-guard.service';


const routes: Routes = [
  // Tela de Login
  { path: '', component: LoginComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },

  { path: 'menu',
   component: PrincipalComponent,
   canActivate: [AuthGuardService]
  },

  { path: 'usuario',
   component: CadUsuarioComponent,
   },
  { path: 'perfil', component: CadPerfilComponent},
  { path: 'Entrevista',
   component: EntrevistaComponent,
   canActivate: [AuthGuardService]
  },
  { path: 'AplicarQuestion', component: AplicarQuestionComponent},
  { path: 'AnaliseGap', component: AnaliseGapComponent},
  { path: 'TabAuxiliar', component: TabAuxiliaresComponent},
  { path: 'painelentrevista',
    component: PainelComponent,
    canActivate: [AuthGuardService]},

  { path: 'documentalfuncional', component: DocumentalfuncionalComponent},
  { path: 'CicloUmEntrevistaFuncional', component: CicloUmEntrevistadocumentalFuncionalComponent },
  { path: 'CicloUmDocFundional', component: CicloUmEntrevistaFuncionalComponent },
  { path: 'CicloUmEntrevistaTecnica', component: CicloUmEntrevistaTecnicaComponent },
  { path: 'CicloUmEntrevistaTecnicaFuncional', component: CicloUmEntrevistaTecnicaFuncionalComponent },
  { path: "ConsultaEntrevista/:id", component: ConsultaEntrevistaComponent},
  { path: 'Selecao-Questionario-Entrevista',
   component: SelecaoQuestionarioEntrevistaComponent,
   canActivate: [AuthGuardService]},
   { path: 'FormCliente', component: FormClienteComponent},

   { path: 'FormCliente', component: FormClienteComponent},

  { path: 'register',
   component: RegisterComponent,
   canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
