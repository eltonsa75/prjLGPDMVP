import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-inicio',
  templateUrl: './timer-inicio.component.html',
  styleUrls: ['./timer-inicio.component.css']
})
export class TimerInicioComponent implements OnInit {

  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;

  public contador:any;

  constructor() { }

  ngOnInit() {
  }

  start(){
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

    stop(){
      clearInterval(this.contador)
      this.contador = null;
    }

    zerar(){
      clearInterval(this.contador);
      this.hora = 0;
      this.minuto = 0;
      this.segundos = 0;
      this.contador = null;
    }

}


