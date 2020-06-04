import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { Area } from './shared/area.model';

import { URL_API } from './app.api';

@Injectable()
export class AreasService {

    constructor(private http: HttpClient) {}

    areas(id: number): Promise<Area> {
        return this.http.get(`${URL_API}/area?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta
        })

      }
    }
