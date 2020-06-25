import { Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customers } from '../../shared/customers.model';
import { CustomersService } from './../../customers.service';

import { CustomersOffices } from './../../shared/customersoffices.model';
import { CustomersOfficesService } from './../../customeroffices.service';

import { BusinessUnits } from './../../shared/businessunits.model';
import { BusinessUnitsService } from './../../businessunits.service';

import { Area } from './../../shared/area.model';
import { AreasService } from './../../area.service';




@Component({
  selector: 'app-consulta-entrevista',
  templateUrl: './consulta-entrevista.component.html',
  styleUrls: ['./consulta-entrevista.component.css'],
  providers: [CustomersService,CustomersOfficesService,
              BusinessUnitsService, AreasService, 
    ]
})
export class ConsultaEntrevistaComponent implements OnInit {

  title = "Consulta de Entrevistas";

  public formulario: FormGroup = new FormGroup({
    'customer_name': new FormControl(null, [Validators.required]),
    'customer_office_name': new FormControl(null, [Validators.required]),
    'business_unit_name': new FormControl(null, [Validators.required]),
    'area_name': new FormControl(null, Validators.required)
  })

  public customers: Customers
  public customersOffices: CustomersOffices
  public businessUnits: BusinessUnits
  public areas: Area
  

  constructor( private CustomersService: CustomersService,
               private CustomersOfficesService: CustomersOfficesService,
               private BusinessUnitsService: BusinessUnitsService,
               private AreasService: AreasService,
               private route: ActivatedRoute,
               private router: Router) {}
  ngOnInit() {

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
  }

  public LimparForm(): void {
    this.formulario.reset();
    }

}
