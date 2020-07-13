import { Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SelecaoQuestionarioEntrevistaService } from './../../selecao-questionario-entrevista.service';
import { SelecaoQuestionarioEntrevista } from './../../shared/SelecaoQuestionarioEntrevista.model';

import { MasterCompanies } from './../../shared/mastercompanies.model';
import { MasterCompaniesService } from './../../masterCompanies.services';

import { Customers } from '../../shared/customers.model';
import { CustomersService } from './../../customers.service';

import { CustomersOffices } from './../../shared/customersoffices.model';
import { CustomersOfficesService } from './../../customeroffices.service';

import { BusinessUnits } from './../../shared/businessunits.model';
import { BusinessUnitsService } from './../../businessunits.service';

import { Area } from './../../shared/area.model';
import { AreasService } from './../../area.service';

import { QuestionnaireFormService } from './../../questionnaireForm.service';
import { QuestionnaireForm } from './../../shared/questionnaireForm.model';
import { ReturnForm } from 'src/app/shared/returnForm.model';


@Component({
  selector: 'app-selecao-questionario-entrevista',
  templateUrl: './selecao-questionario-entrevista.component.html',
  styleUrls: ['./selecao-questionario-entrevista.component.css'],
  providers: [SelecaoQuestionarioEntrevistaService,
              MasterCompaniesService,
              CustomersService,
              CustomersOfficesService,
              BusinessUnitsService,
              AreasService,
              QuestionnaireFormService]

})
export class SelecaoQuestionarioEntrevistaComponent implements OnInit {

  title = "Seleção do Questionário para Entrevista";

  public idQuestionarioEntrevista: number
  
  public formulario: FormGroup = new FormGroup({
    'customer_name': new FormControl(null, [Validators.required]),
    'customer_office_name': new FormControl(null, [Validators.required]),
    'business_unit_name': new FormControl(null, [Validators.required]),
    'area_name': new FormControl(null, Validators.required),
    'questionnaire_version_name': new FormControl(null, Validators.required)
  })

 // Criar as propriedades para o HTML
  public masterCompanies: MasterCompanies
  public customers: Customers
  public customersOffices: CustomersOffices
  public businessUnits: BusinessUnits
  public areas: Area
  public questionnaireForms : QuestionnaireForm


  public customer_name: Customers

  public returnForm: ReturnForm

  constructor(private selecaoQuestionarioEntrevistaService: SelecaoQuestionarioEntrevistaService,
              private MasterCompaniesService: MasterCompaniesService,
              private CustomersService: CustomersService,
              private CustomersOfficesService: CustomersOfficesService,
              private BusinessUnitsService: BusinessUnitsService,
              private AreasService: AreasService,
              private QuestionnaireFormService: QuestionnaireFormService,
              private route: ActivatedRoute,
              private router: Router) {}

ngOnInit(){
  // Método da Master Companies
  this.route.params.subscribe((parametros: Params) => {
    this.MasterCompaniesService.mastercompanies(parametros.id)
    .then((masterCompanies: MasterCompanies) => {
      this.masterCompanies = masterCompanies
    })   
  })

    // Método do Customer busca valor do BD
    this.route.params.subscribe((parametros: Params) => {
      this.CustomersService.customers(parametros.id)
      .then((customers: Customers) => {
        this.customers = customers
        this.customers = customers
      })
    })

    // Método do Customer_offices
    this.route.params.subscribe((parametros: Params) => {
      this.CustomersOfficesService.customeroffices(parametros.id)
      .then((customersOffices: CustomersOffices) => {
        this.customersOffices = customersOffices
      })   
    })


       // Método do Business_Units
       this.route.params.subscribe((parametros: Params) => {
        this.BusinessUnitsService.businessUnits(parametros.id)
        .then((businessUnits: BusinessUnits) => {
          this.businessUnits = businessUnits
        })   
      })


           // Método do Area
           this.route.params.subscribe((parametros: Params) => {
            this.AreasService.areas(parametros.id)
            .then((areas: Area) => {
              this.areas = areas
            })   
          })
    
            // Método do QuestionnaireForms
            this.route.params.subscribe((parametros: Params) => {
              this.QuestionnaireFormService.questionnaireForm(parametros.id)
              .then((questionnaireForm: QuestionnaireForm) => {
                this.questionnaireForms = questionnaireForm 
              })   
            })
            

}

/*
//Método Ligado ao formulário (ngSubmit)
public FormSelecao(): void {
  if(this.formulario.status === 'INVALID'){
    console.log('formulário está inválido')

    this.formulario.get('customer_name').markAllAsTouched()
    this.formulario.get('customer_office_name').markAllAsTouched()
    this.formulario.get('business_unit_name').markAllAsTouched()
    this.formulario.get('area_name').markAllAsTouched()
    this.formulario.get('questionnaire_version_name').markAllAsTouched()
  } else {

    // Campos realcionado ao Model
    let entrevista: SelecaoQuestionarioEntrevista = new SelecaoQuestionarioEntrevista(
      this.formulario.value.customer_name,
      this.formulario.value.customer_office_name,
      this.formulario.value.business_unit_name,
      this.formulario.value.area_name,
      this.formulario.value.questionnaire_version_name,
      
    )   

    this.selecaoQuestionarioEntrevistaService.selecaoQuestionario(entrevista)
    .subscribe((idEntrevista: number) => {
      this.idQuestionarioEntrevista = idEntrevista
      this.returnForm = idEntrevista
     this.router.navigate(['/question/Entrevista', this.returnForm]);
     this.formulario.reset();
    }) 
  }
}
*/
  public LimparForm(): void {
  this.formulario.reset();
  }


}
