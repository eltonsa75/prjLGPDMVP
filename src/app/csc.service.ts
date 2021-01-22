import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { BusinessUnits } from './shared/businessunits.model';
import { URL_API } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class cscService {

  constructor(private http: HttpClient) {}

   //Select Nome da Cliente
  public getCustomers() {
      return this.http.get(`${URL_API}/customers`)
      }

   //Select Nome da Filial
  public getCustomeroffices(){
    return this.http.get(`${URL_API}/customersoffice`)
  }


   //Select Nome da Unidade de Négocio
  public getBusinessunits() {
      return this.http.get(`${URL_API}/businessunits`)
      }


   //Select Nome da Área
  public getAreas() {
        return this.http.get(`${URL_API}/area`)
      }


}
