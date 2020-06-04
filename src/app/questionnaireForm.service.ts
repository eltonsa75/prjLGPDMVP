import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { QuestionnaireForm } from './shared/questionnaireForm.model';

import { URL_API } from './app.api';


@Injectable()
export class QuestionnaireFormService {

    constructor(private http: HttpClient) {}

    questionnaireForm(id: number): Promise<QuestionnaireForm> {
        return this.http.get(`${URL_API}/questionnaireForm?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta
        })

      }

}