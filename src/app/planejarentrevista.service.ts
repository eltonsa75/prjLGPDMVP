import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlanejarEntrevista } from './shared/planejarentrevista.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';




@Injectable()
export class PlanejarentrevistaService {

    constructor(private http: HttpClient) {}

    public gravarPlanejarEntrevista(planejarentrevista: PlanejarEntrevista): Observable<number> {

       // Requisição em Post
       let headers: HttpHeaders = new HttpHeaders()
       headers.append('Content-type', 'application/json')

       return this.http.post(
           `${URL_API}/planejarentrevista`,
           (planejarentrevista),
           ({headers: headers})
       )
       //Retorno da API
       .map((resposta: any) => resposta.id)
   }
}