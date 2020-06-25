import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { IntervieweeService } from './../../interviewee.service';
import { Interviewee } from './../../shared/interviewee.model';

import { SelecaoQuestionarioEntrevistaService } from './../../selecao-questionario-entrevista.service';
import { SelecaoQuestionarioEntrevista } from './../../shared/SelecaoQuestionarioEntrevista.model';


import { SelecaoEntrevistado } from './../../shared/selecaoEntrevistados.model';
import { SelectIntervieweetService } from './../../selectInterviewee.service';

import { Customers } from '../../shared/customers.model';
import { CustomersService } from './../../customers.service';

import { ReturnForm } from './../../shared/returnForm.model';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css'],
  providers: [ IntervieweeService,
               CustomersService,
               SelecaoQuestionarioEntrevistaService,
               SelectIntervieweetService]
})
export class EntrevistaComponent implements OnInit {

  title = "Entrevista";

  public idQuestionarioEntrevista: number
  public interviewees : Interviewee
 
  public customers: Customers


 public returnForm: string

 fantasy_name: string
 customer_office_name: string
 business_unit_name: string
 area_name:string
 questionnaire_form_name:string

  public formulario: FormGroup = new FormGroup({
    'interviewee_1_id': new FormControl(null, [Validators.required]),
    'interviewee_2_id': new FormControl(null),
    'interviewee_3_id': new FormControl(null),
    'interviewee_4_id': new FormControl(null),
    'interviewee_5_id': new FormControl(null),
    'location': new FormControl(null),
    'consideracaoesGerais': new FormControl(null),
    'demaisparticipantes': new FormControl(null)
  })

   constructor(private IntervieweeService: IntervieweeService,
               private CustomersService: CustomersService,
               private SelecaoQuestionarioEntrevistaService: SelecaoQuestionarioEntrevistaService,
               private SelectIntervieweetService: SelectIntervieweetService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

      this.fantasy_name = this.route.snapshot.paramMap.get('fantasy_name')
      this.customer_office_name = this.route.snapshot.paramMap.get('customer_office_name')
      this.business_unit_name = this.route.snapshot.paramMap.get('business_unit_name')
      this.area_name = this.route.snapshot.paramMap.get('area_name')
      this.questionnaire_form_name = this.route.snapshot.paramMap.get('questionnaire_form_name')


    // Método do Interviewee -- Get
    this.route.params.subscribe((parametros: Params) => {
      this.IntervieweeService.intervieweeForm(parametros.id)
      .then((interviewee: Interviewee) => {
        this.interviewees = interviewee
      })   
    })

  }

  //Método Ligado ao formulário (ngSubmit)
public FormEntrevista(): void {
  if(this.formulario.status === 'INVALID'){
    console.log('formulário está inválido')

    this.formulario.get('interviewee_1_id').markAllAsTouched()
    this.formulario.get('interviewee_2_id').markAllAsTouched()
    this.formulario.get('interviewee_3_id').markAllAsTouched()
    this.formulario.get('interviewee_4_id').markAllAsTouched()
    this.formulario.get('interviewee_5_id').markAllAsTouched()
    this.formulario.get('location').markAsTouched()
    this.formulario.get('consideracaoesGerais').markAsTouched()
    this.formulario.get('demaisparticipantes').markAllAsTouched()
  } else {

  // Campos realcionado ao Model
  let entrevista: SelecaoEntrevistado = new SelecaoEntrevistado(
    this.formulario.value.interviewee_1_id,
    this.formulario.value.interviewee_2_id,
    this.formulario.value.interviewee_3_id,
    this.formulario.value.interviewee_4_id,
    this.formulario.value.interviewee_5_id,
    this.formulario.value.location,
    this.formulario.value.consideracaoesGerais,
    this.formulario.value.demaisparticipantes
  )

  console.log('Value', this.formulario)

  this.SelectIntervieweetService.intervieweeForm(entrevista)
  .subscribe((idEntrevista: number) => {
    this.idQuestionarioEntrevista = idEntrevista
    this.router.navigate(['/question/painelentrevista']);
      this.formulario.reset();
    }) 
  }
}

public LimparForm(): void {
  this.formulario.reset();
}


}