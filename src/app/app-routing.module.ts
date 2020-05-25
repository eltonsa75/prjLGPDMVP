import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'question'
},
{
  path: 'question',
  loadChildren: './question/question.module#QuestionModule'
},
{
path: '**', component: PaginaNaoEncontradaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
