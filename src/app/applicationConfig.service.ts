import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { ApplicationConfigs } from './shared/applicationConfigs.model';

import { URL_API } from './app.api';


@Injectable()
export class ApplicationConfigService {

    constructor(private http: HttpClient) {}

    public entrevista: any
    

    public applicationConfig(id: number): Promise<ApplicationConfigs> {
        return this.http.get(`${URL_API}/showapp?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
        console.log('Application Service', resposta)
            this.entrevista = resposta
            return resposta
        })
      }
   

   
}
