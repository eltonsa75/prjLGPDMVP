import { Component, OnInit } from '@angular/core';

import { Question } from './../../../../../../shared/question.model';


@Component({
  selector: 'app-timer-questionario',
  templateUrl: './timer-questionario.component.html',
  styleUrls: ['./timer-questionario.component.css']
})
export class TimerQuestionarioComponent implements OnInit {

  public question: Question

  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;
  public contador:any;

  interview_total_elapsed_time: any

  constructor() { }

  ngOnInit() {
    this.inicio()
  }

  inicio(){
    if(this.interview_total_elapsed_time == undefined){ 
      this.interview_total_elapsed_time = setInterval(() =>{
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
