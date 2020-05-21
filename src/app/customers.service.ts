import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { Customers } from './shared/customers.model';

import { URL_API } from './app.api';


@Injectable()
export class CustomersService {

    constructor(private http: HttpClient) {}

    customers(id: number): Promise<Customers> {
        return this.http.get(`${URL_API}/customers?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log('Valores do Service', resposta)
            return resposta
        })

      }

}