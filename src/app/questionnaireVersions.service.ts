import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



import { QuestionnaireVersion } from './shared/questionnaireVersions.model';

import { URL_API } from './app.api';


@Injectable()
export class QuestionnaireVersionsService {

    constructor(private http: HttpClient) {}

    questionnaireVersions(id: number): Promise<QuestionnaireVersion> {
        return this.http.get(`${URL_API}/questionnaireVersions?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log('Questionario Version', resposta)
            return resposta
        })

      }

}