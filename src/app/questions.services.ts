import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Question } from './shared/question.model';


//Endereço da API
import { URL_API } from './app.api';


import 'rxjs/add/operator/toPromise'

@Injectable()
export class QuestionsService {

    constructor(private http: HttpClient) { }  

    public getQuestions(params: string): Promise<Question> {
        // efetuar uma requisição http 
        return this.http.get(`${URL_API}/primeiraQuestao`)
        .toPromise()
        .then((resposta: any) => resposta )       
        //retornar um Promise Question[]        
    }

    public getSaveAndNext(answer: Object, next: {
        carga: string, question_edited_number:string}): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post(`${URL_API}/save_and_next`,"json=" + JSON.stringify({answer: answer,next: next}),
        httpOptions
        )
        .toPromise()
        .then((questions) => questions ? questions[0] : {})
    }

    public getNext(
        carga: string, question_edited_number:string): Promise<any> {
        return this.http.get(`${URL_API}/proxima/carga/${carga}/question_edited_number/${question_edited_number}`)
        .toPromise()
        .then((questions) => questions ? questions[0] : {})
    }

    public async init(): Promise<any> {
        // efetuar uma requisição http 
        return await this.http.get(`${URL_API}/primeiraQuestao`).toPromise().then((questions) => questions ? questions[0] : {});
    }
} 
