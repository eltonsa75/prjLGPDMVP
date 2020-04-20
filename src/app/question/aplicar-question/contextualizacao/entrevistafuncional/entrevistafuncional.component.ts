import { Question } from './../../../../shared/question.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


import { QUESTIONS } from './questions-mock';

@Component({
  selector: 'app-entrevistafuncional',
  templateUrl: './entrevistafuncional.component.html',
  styleUrls: ['./entrevistafuncional.component.css']
})
export class EntrevistafuncionalComponent implements OnInit {
  

  title = "Entrevista Funcional - Contextualização"

  public titulo: string = 'Questões'
  public Question: Question[] = QUESTIONS
  public resposta: string


  public rodada: number = 0
  public rodadaQuestion: Question

  public progresso: number = 25

  @Output() public encerrarQuestion: EventEmitter<string> = new EventEmitter()


  constructor() {
    this.atualizaQuestion()    
  }

  ngOnInit() {
    $(document).ready(function(){
      $("#radio").click(function(){
        $("#div1").fadeIn();      
      });
    });
    
    $(document).ready(function(){
      $("#radio").click(function(){
        $("#div2").fadeIn();      
      });
    }); 
  }


  public RespSim(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)

  }

  public RespNao(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  //avançar Question
  public avancarQuestion(): void {
    // Avançar a question
    this.rodada++

    //progresso
    this.progresso = this.progresso + (100 / this.Question.length)

    if(this.rodada === 4){
       this.encerrarQuestion.emit('Finalizou')
    }
   
     // autualiza o objeto rodadaQuestion
   this.atualizaQuestion()
  }

  //Voltar a Question
  public voltarQuestion(): void {
    // Retornar a Question
    this.rodada--

    //regresso
    this.progresso = this.progresso - (100 / this.Question.length)

    if(this.rodada === -1){
      this.encerrarQuestion.emit('Inicializar')     
    }
    this.atualizaQuestion()
  }
  
  public atualizaQuestion(): void {
    this.rodadaQuestion = this.Question[this.rodada]
  }

}
