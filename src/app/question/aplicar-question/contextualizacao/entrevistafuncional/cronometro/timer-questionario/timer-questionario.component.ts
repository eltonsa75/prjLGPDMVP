import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-questionario',
  templateUrl: './timer-questionario.component.html',
  styleUrls: ['./timer-questionario.component.css']
})
export class TimerQuestionarioComponent implements OnInit {

  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;
  public contador:any;

  constructor() { }

  ngOnInit() {
    this.inicio()
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
