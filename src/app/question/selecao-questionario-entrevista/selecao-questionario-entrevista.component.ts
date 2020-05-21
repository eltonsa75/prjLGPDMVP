import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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


@Component({
  selector: 'app-selecao-questionario-entrevista',
  templateUrl: './selecao-questionario-entrevista.component.html',
  styleUrls: ['./selecao-questionario-entrevista.component.css'],
  providers: [SelecaoQuestionarioEntrevistaService,
              MasterCompaniesService,
              CustomersService,
              CustomersOfficesService,
              BusinessUnitsService,
              AreasService]

})
export class SelecaoQuestionarioEntrevistaComponent implements OnInit {

  title = "Seleção do Questionário para Entrevista";

  public idQuestionarioEntrevista: number

  public formulario: FormGroup = new FormGroup({
    'cliente': new FormControl(null, [Validators.required]),
    'filial': new FormControl(null, [Validators.required]),
    'unidadeNegocio': new FormControl(null, [Validators.required]),
    'area': new FormControl(null, Validators.required),
    'questionario': new FormControl(null, Validators.required)
  })

 // Criar as propriedades para o HTML
  public masterCompanies: MasterCompanies
  public customers: Customers
  public customersOffices: CustomersOffices
  public businessUnits: BusinessUnits
  public areas: Area

 

  constructor(private selecaoQuestionarioEntrevistaService: SelecaoQuestionarioEntrevistaService,
              private MasterCompaniesService: MasterCompaniesService,
              private CustomersService: CustomersService,
              private CustomersOfficesService: CustomersOfficesService,
              private BusinessUnitsService: BusinessUnitsService,
              private AreasService: AreasService,
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

    // Método do Customer
    this.route.params.subscribe((parametros: Params) => {
      this.CustomersService.customers(parametros.id)
      .then((customers: Customers) => {
        console.log('Valores do Component', customers)
        this.customers = customers
      })   
    })

    // Método do Customer_offices
    this.route.params.subscribe((parametros: Params) => {
      this.CustomersOfficesService.customeroffices(parametros.id)
      .then((customersOffices: CustomersOffices) => {
        console.log('Valores do Component Office', customersOffices)
        this.customersOffices = customersOffices
      })   
    })


       // Método do Business_Units
       this.route.params.subscribe((parametros: Params) => {
        this.BusinessUnitsService.businessUnits(parametros.id)
        .then((businessUnits: BusinessUnits) => {
          console.log('Valores do Component Business Units', businessUnits)
          this.businessUnits = businessUnits
        })   
      })


           // Método do Area
           this.route.params.subscribe((parametros: Params) => {
            this.AreasService.areas(parametros.id)
            .then((areas: Area) => {
              console.log('Valores do Component Area', areas)
              this.areas = areas
            })   
          })
    


  
}
//Método Ligado ao formulário (ngSubmit)
public FormSelecao(): void {
  if(this.formulario.status === 'INVALID'){
    console.log('formulário está inválido')

    this.formulario.get('cliente').markAllAsTouched()
    this.formulario.get('filial').markAllAsTouched()
    this.formulario.get('unidadeNegocio').markAllAsTouched()
    this.formulario.get('area').markAllAsTouched()
    this.formulario.get('questionario').markAllAsTouched()
  } else {

    let entrevista: SelecaoQuestionarioEntrevista = new SelecaoQuestionarioEntrevista(
      this.formulario.value.cliente,
      this.formulario.value.filial,
      this.formulario.value.unidadeNegocio,
      this.formulario.value.area,
      this.formulario.value.questionario
    )

    this.selecaoQuestionarioEntrevistaService.selecaoQuestionario(entrevista)
    .subscribe((idEntrevista: number) => {
      this.idQuestionarioEntrevista = idEntrevista
      // Método que limpa o Formulário
      this.formulario.reset();
      this.router.navigate(['/question/Entrevista']);
      console.log(this.idQuestionarioEntrevista)
    }) 
  }
}

  public LimparForm(): void {
    this.formulario.reset();
  }


}
