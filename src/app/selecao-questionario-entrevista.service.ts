import { ReturnForm } from './shared/returnForm.model';
import { SelecaoQuestionarioEntrevista } from './shared/selecaoQuestionarioEntrevista.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';


@Injectable()
export class SelecaoQuestionarioEntrevistaService {

   public returnForm: any


    constructor(private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router) {}
    
    

    public selecaoQuestionario(entrevista : SelecaoQuestionarioEntrevista): Observable<any> {

         let headers: HttpHeaders = new HttpHeaders()
         headers.append('Content-type', 'application/json')

         //(`${URL_API}/interviewee?id=${id}`)
 
         return this.http.put(`${URL_API}/registerapplication/${this.route.snapshot.paramMap.get('id')}`,
             (entrevista),
             ({headers: headers})
         )
         .map((resposta: any) => {
            this.returnForm = resposta
            console.log('Resposta do Service', resposta)
            return resposta}) 
     }




 }
