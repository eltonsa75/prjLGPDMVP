
import { Router } from '@angular/router';
import { QuestionsService } from '../../../../questions.services';
import { Question } from './../../../../shared/question.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-entrevistafuncional',
  templateUrl: './entrevistafuncional.component.html',
  styleUrls: ['./entrevistafuncional.component.css'],
  providers: [QuestionsService]
})

export class EntrevistafuncionalComponent implements OnInit {

  public title = "Análise Documental: Politicas ou Normas sobre Governança de Dados / ou Governança de Privacidade"
  public numeroQuestion = '01 - '
  public question: Question
  public resposta: string
  public rodada: number = 0
  public rodadaQuestion: Question
  public progresso: number = 0 // Variavel da Barra de progresso
  public id: number;
  public respForm: any;

  @Output() public encerrarQuestion: EventEmitter<string> = new EventEmitter()

  constructor(private questionsService: QuestionsService, private formBuilder: FormBuilder) { 

  }

  initForm() {
    this.respForm=this.formBuilder.group({
      radioAnswer:['',Validators.required],
      txtObservations:[''],
      txtComments:['']
    })
  }

  ngOnInit() {
    // Chamando o Método do QuestionsService  
       this.questionsService.init()
      .then((question: Question) => {
        // AtualizarResposta    
        this.question = question
      })
      .catch((param: any) => {
      })
      this.initForm();
  }

  public save(): void {
    if (!this.isFinished()){
      if (this.respForm.valid){
        const if_yes = this.question.if_yes ? this.question.if_yes.toString() : null;
        const if_no = this.question.if_no ? this.question.if_no.toString() : null; 
        this.questionsService.getSaveAndNext(
          {
            application_config_id: "1",
            question_id: this.question.id,
            phase_id: this.question.phase_id,
            interviewer_id: '1',
            respondent_id: '1',
            answer_yes_no: this.respForm.value.radioAnswer,
            answer_comments: this.respForm.value.txtComments,
            answer_observation: this.respForm.value.txtObservations
          },
          {
            carga: this.question.questionnaire_version_id_carga.toString(), 
            question_edited_number: this.respForm.value.radioAnswer === "1"? if_yes : if_no
          } 
        ).then((question: Question) => {
          // AtualizarResposta    
          if (question){
            this.question = question
            this.initForm();
          }else{
            this.initForm();
            if (this.isFinished()){
              alert("Você alcançou o final do Questionário.");        
            }
          }
        })
        .catch((param: any) => {
        })
      }else{
        alert("Selecione uma opçâo : 'Sim','Nâo' ou 'Nâo se aplica'.");
      }
    }else {
      this.initForm();
      alert("Você alcançou o final do Questionário.");
    }
  }

  private isFinished(): boolean {
    if (this.question.if_no === null  && this.question.if_yes === null){
      return true;
    }
    return false;
  }

    //avançar Question
  public avancarQuestion(): void {
       if (!this.isFinished()){ 
        const if_no = this.question.if_no ? this.question.if_no.toString() : null;   
        this.questionsService.getSaveAndNext(
          {
            application_config_id: "1",
            question_id: this.question.id,
            phase_id: this.question.phase_id,
            interviewer_id: '1',
            respondent_id: '1',
            answer_yes_no: '3',
            answer_comments: '',
            answer_observation: ''
          },
          {
            carga: this.question.questionnaire_version_id_carga.toString(), 
            question_edited_number: if_no
          } 
        ).then((question: Question) => {
          // AtualizarResposta
          this.question = question
          this.initForm();
        })
        .catch((param: any) => {
        })
      }else{
        this.initForm();
        alert("Você alcançou o final do Questionário.");
      }
  }

  public voltarQuestion(): void {
    
    if (this.question.if_back){    
      this.questionsService.getNext(
        this.question.questionnaire_version_id_carga.toString(), 
        this.question.if_back.toString()
      )
      .then((question: Question) => {
        // AtualizarResposta    
        this.question = question
        this.initForm();
      })
      .catch((param: any) => {
      })
    }else{
      alert("Início")
    }
  }
}
