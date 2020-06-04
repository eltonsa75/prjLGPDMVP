import { ReturnForm } from './shared/returnForm.model';
import { SelecaoQuestionarioEntrevista } from './shared/selecaoQuestionarioEntrevista.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';


@Injectable()
export class SelecaoQuestionarioEntrevistaService {

   public returnForm: any

    constructor(private http: HttpClient){}
    

    public selecaoQuestionario(entrevista : SelecaoQuestionarioEntrevista): Observable<any> {

        // Requisição em Post
         let headers: HttpHeaders = new HttpHeaders()
         headers.append('Content-type', 'application/json')
 
         return this.http.post(
             `${URL_API}/registerapplication`,
             (entrevista),
             ({headers: headers})
         )
         .map((resposta: any) => {
            this.returnForm = resposta
            return resposta}) 
     }



 }
