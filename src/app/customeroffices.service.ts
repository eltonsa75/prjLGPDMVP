import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { CustomersOffices } from './shared/customersoffices.model';

import { URL_API } from './app.api';


@Injectable()
export class CustomersOfficesService {

    constructor(private http: HttpClient) {}

    customeroffices(id: number): Promise<CustomersOffices> {
        return this.http.get(`${URL_API}/customersoffice?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log('Valores do Service Office', resposta)
            return resposta
        })

      }

}