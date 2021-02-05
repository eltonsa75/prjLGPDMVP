import { Router, Params } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { QuestionResp } from './../../../../shared/questionResp.model';


import { QuestionsService } from '../../../../questions.services';
import { Question } from './../../../../shared/question.model';

import { QuestionnaireForm } from './../../../../shared/questionnaireForm.model';
import { QuestionnaireFormService } from './../../../../questionnaireForm.service';

import { QuestionnaireVersionsService } from './../../../../questionnaireVersions.service';
import { QuestionnaireVersion } from './../../../../shared/questionnaireVersions.model';


import { ApplicationConfigs } from './../../../../shared/applicationConfigs.model';
import { ApplicationConfigService } from './../../../../applicationConfig.service';





@Component({
  selector: 'app-entrevistafuncional',
  templateUrl: './entrevistafuncional.component.html',
  styleUrls: ['./entrevistafuncional.component.css'],
  providers: [QuestionsService,
              QuestionnaireFormService,
              QuestionnaireVersionsService,
              ApplicationConfigService]
})

export class EntrevistafuncionalComponent implements OnInit {
  
  public resposta: string
  public question: Question
  
  public rodada: number = 0
  public progresso: number = 0

  public rodadaQuestion: number = 0

  public id: number;
  public respForm: any;


  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;
  public contador:any;

  //respForm: FormGroup

  public questionnaireForms : QuestionnaireForm
  public questionnaireVersions: QuestionnaireVersion

  


  @Output() public encerrarQuestion: EventEmitter<string> = new EventEmitter()

  constructor(private questionsService: QuestionsService,
              private formBuilder: FormBuilder,
              private questionnaireFormService: QuestionnaireFormService,
              private questionnaireVersionsService: QuestionnaireVersionsService,
              private applicationConfigService: ApplicationConfigService,
              private route: ActivatedRoute,
              private router: Router) {
              }
  ngOnInit() { 
    
    this.inicio()
          
      // Método do QuestionnaireForms
      this.route.params.subscribe((parametros: Params) => {
        this.questionnaireFormService.questionnaireForm(parametros.id)
        .then((questionnaireForm: QuestionnaireForm) => {
          this.questionnaireForms = questionnaireForm 
          console.log('QuestionnaireForms', this.questionnaireForms)
        })   
      })

          // Método do QuestionnaireVersion
          this.route.params.subscribe((parametros: Params) => {
            this.questionnaireVersionsService.questionnaireVersions(parametros.id)
            .then((questionnaireVersion: QuestionnaireVersion) => {
              this.questionnaireVersions = questionnaireVersion
            })   
          })



    // Chamando o Método do QuestionsService  
       this.questionsService.init()
      .then((question: Question) => {
        // AtualizarResposta
        this.question = question
        console.log("Service Questões", this.question)
      })
      .catch((param: any) => {
      })
      this.initForm();
  }

  // Método que Inicializa o Formulário
  initForm() {
    this.respForm = new FormGroup({
      'radioAnswer': new FormControl([null,Validators.required]),
      'txtObservations': new FormControl([null]),
      'txtComments': new FormControl([null]),
      'answer_observation': new FormControl([null]),
      'answer_comments': new FormControl([null]),
    })   
  }

  public save(): void {
    if (!this.isFinished()){
      if (this.respForm.valid){
        const if_yes = this.question.if_yes ? this.question.if_yes.toString() : null;
        const if_no = this.question.if_no ? this.question.if_no.toString() : null; 
        this.questionsService.getSaveAndNext(
          {
            application_config_id: this.question.application_config_id,
            question_id: this.question.id,
            phase_id: this.question.phase_id,
            interviewer_id: this.question.user_parameter_id,
            respondent_id: "1",
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
            this.progresso = (question.responses_qtd / question.last_question_number) * 100
            console.log('Barra de Progresso', this.progresso);
            //this.initForm();
            
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
          this.respForm.value.radioAnswer;
      }
    }else {
      this.initForm();
      alert("Você alcançou o final do Questionário.");
    }

  }

    LimparForm(): void {
    this.respForm.reset();
    }
  
  private isFinished(): boolean {
    if (this.question.if_no === null && this.question.if_yes === null){
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
            application_config_id: this.question.application_config_id,
            question_id: this.question.id,
            phase_id: this.question.phase_id,
            interviewer_id: 1,
            respondent_id: 1,
            answer_yes_no: 3,
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
          //this.initForm();
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
        //this.initForm();
      })
      .catch((param: any) => {
      })
    }else{
      //alert("Início")
    }

  }
  
  inicio(){
    if(this.contador == undefined){ 
      this.contador = setInterval(() =>{
          this.segundos +=1;
          if(this.segundos == 60){
            this.segundos = 0;
            this.minuto +=1;
            if(this.minuto == 60){
              this.minuto = 0;
              this.hora +=1;
              if(this.hora == 24){
                this.hora = 0;
              }
            }
          }
      }, 1000)
    }
    }
 
}
