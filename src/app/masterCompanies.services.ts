import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { MasterCompanies } from './shared/mastercompanies.model';


import { URL_API } from './app.api';


@Injectable()
export class MasterCompaniesService {

    constructor(private http: HttpClient) {}
    mastercompanies(id: number): Promise<MasterCompanies> {
        return this.http.get(`${URL_API}/mastercompanies?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta['data']
        })

      }

}