import { SelecaoEntrevistado } from './shared/selecaoEntrevistados.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';

@Injectable()
export class SelectIntervieweetService {
    

    constructor(private http: HttpClient){}

    public intervieweeForm(entrevista : SelecaoEntrevistado): Observable<any> {

     console.log('Resultado do Interviewee',entrevista)

        // Requisição em Post
         let headers: HttpHeaders = new HttpHeaders()
         headers.append('Content-type', 'application/json')
 
         return this.http.post(
             `${URL_API}/questApplicationLog`,
             (entrevista),
             ({headers: headers})
         )
         .map((resposta: any) => resposta)
     }

     

 }