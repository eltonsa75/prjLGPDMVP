import { QuestionsService } from '../../questions.services';
import { Question } from './../../shared/question.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-aplicar-question',
  templateUrl: './aplicar-question.component.html',
  styleUrls: ['./aplicar-question.component.css'],
  providers: [ QuestionsService ]
})
export class AplicarQuestionComponent implements OnInit {



  title = "SISTEMA DE AUTOMAÇÃO DE QUESTIONÁRIO - LGPD ";

  public questions: Question[]
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
 
  }

}
