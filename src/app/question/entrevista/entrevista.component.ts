
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Entrevista } from './../../shared/entrevista.model';
import { EntrevistaService } from './../../entrevista.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css'],
  providers: [ EntrevistaService]
})
export class EntrevistaComponent implements OnInit {

  title = "Entrevista";

  public idQuestionarioEntrevista: number

  public formulario: FormGroup = new FormGroup({
    'entrevistado1': new FormControl(null, [Validators.required]),
    'entrevistado2': new FormControl(null),
    'entrevistado3': new FormControl(null),
    'entrevistado4': new FormControl(null),
    'entrevistado5': new FormControl(null),
    'consideracaoesGerais': new FormControl(null)

  })

  constructor(private questionarioEntrevista: EntrevistaService,
              private router: Router) { }

  ngOnInit() {
  }

  //Método Ligado ao formulário (ngSubmit)
public FormEntrevista(): void {
  if(this.formulario.status === 'INVALID'){
    console.log('formulário está inválido')

    this.formulario.get('entrevistado1').markAllAsTouched()
    this.formulario.get('entrevistado2').markAllAsTouched()
    this.formulario.get('entrevistado3').markAllAsTouched()
    this.formulario.get('entrevistado4').markAllAsTouched()
    this.formulario.get('entrevistado5').markAllAsTouched()
    this.formulario.get('consideracaoesGerais').markAsTouched()
  } else {
    let entrevista: Entrevista = new Entrevista(
      this.formulario.value.entrevistado1,
      this.formulario.value.entrevistado2,
      this.formulario.value.entrevistado3,
      this.formulario.value.entrevistado4,
      this.formulario.value.entrevistado5,
      this.formulario.value.consideracaoesGerais
    )

    this.questionarioEntrevista.questionarioEntrevista(entrevista)
    .subscribe((idEntrevista: number) => {
      this.idQuestionarioEntrevista = idEntrevista
      // Método que limpa o Formulário
      this.formulario.reset();
      //this.router.navigate(['/question/Entrevista']);
      console.log(this.idQuestionarioEntrevista)
    }) 
  }
}

  public LimparForm(): void {
  this.formulario.reset();
  }

}
