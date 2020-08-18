import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { IntervieweeService } from './../../interviewee.service';
import { Interviewee } from './../../shared/interviewee.model';

import { SelecaoQuestionarioEntrevistaService } from './../../selecao-questionario-entrevista.service';



import { SelecaoEntrevistado } from './../../shared/selecaoEntrevistados.model';
import { SelectIntervieweetService } from '../../selectInterviewee.service';

import { Customers } from '../../shared/customers.model';
import { CustomersService } from './../../customers.service';



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

  title = "ENTREVISTA";

  public idQuestionarioEntrevista: number
  public interviewees : Interviewee
 
  public customers: Customers


 //public returnForm: string

 
 fantasy_name: string
 customer_office_name: string
 business_unit_name: string
 area_name:string

  public formulario: FormGroup = new FormGroup({
    'interviewee_1_id_log': new FormControl(null, [Validators.required]),
    'interviewee_2_id_log': new FormControl(null),
    'interviewee_3_id_log': new FormControl(null),
    'interviewee_4_id_log': new FormControl(null),
    'interviewee_5_id_log': new FormControl(null),
    'location_log': new FormControl(null),
    'general_considerations_log': new FormControl(null),
    'other_participants_log': new FormControl(null)
  })

   constructor(private IntervieweeService: IntervieweeService,                            
               private SelectIntervieweetService: SelectIntervieweetService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
      this.fantasy_name = this.route.snapshot.paramMap.get('fantasy_name')
      this.customer_office_name = this.route.snapshot.paramMap.get('customer_office_name')
      this.business_unit_name = this.route.snapshot.paramMap.get('business_unit_name')
      this.area_name = this.route.snapshot.paramMap.get('area_name')
  

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

    this.formulario.get('interviewee_1_id_log').markAllAsTouched()
    this.formulario.get('interviewee_2_id_log').markAllAsTouched()
    this.formulario.get('interviewee_3_id_log').markAllAsTouched()
    this.formulario.get('interviewee_4_id_log').markAllAsTouched()
    this.formulario.get('interviewee_5_id_log').markAllAsTouched()
    this.formulario.get('location_log').markAsTouched()
    this.formulario.get('general_considerations_log').markAsTouched()
    this.formulario.get('other_participants_log').markAllAsTouched()
  } else {

  // Campos realcionado ao Model
  let entrevista: SelecaoEntrevistado = new SelecaoEntrevistado(
    this.formulario.value.interviewee_1_id_log,
    this.formulario.value.interviewee_2_id_log,
    this.formulario.value.interviewee_3_id_log,
    this.formulario.value.interviewee_4_id_log,
    this.formulario.value.interviewee_5_id_log,
    this.formulario.value.location_log,
    this.formulario.value.general_considerations_log,
    this.formulario.value.other_participants_log
  )

 
  this.SelectIntervieweetService.intervieweeForm(entrevista)
  .subscribe((idEntrevista: number) => {
    this.idQuestionarioEntrevista = idEntrevista
    this.router.navigate(['/question/painelentrevista/:id']);
      this.formulario.reset();
    }) 
  }
}

public LimparForm(): void {
  this.formulario.reset();
}


}