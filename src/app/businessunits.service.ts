import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { BusinessUnits } from './shared/businessunits.model';

import { URL_API } from './app.api';

@Injectable()
export class BusinessUnitsService {

    constructor(private http: HttpClient) {}

    businessUnits(id: number): Promise<BusinessUnits> {
        return this.http.get(`${URL_API}/businessunits?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta
        })

      }

    }
