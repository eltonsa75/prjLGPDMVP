import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Interviewee } from './shared/interviewee.model';

import { URL_API } from './app.api';



@Injectable()
export class IntervieweeService {

    constructor(private http: HttpClient) {}

    public intervieweeForm(id: number): Promise<Interviewee> {
        return this.http.get(`${URL_API}/interviewee?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta
        })
      }

 
}