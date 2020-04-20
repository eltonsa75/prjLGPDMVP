import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(' Componente painel foi destruido ')
  }

  public questionEmAndamento: boolean = true
  public questionEncerrado: string

  public encerrarQuestion(tipo: string): void {
    console.log(tipo);
    this.questionEmAndamento = false
    this.questionEncerrado = tipo
  }

  public reiniciarQuestion(): void {
    this.questionEmAndamento = true
    this.questionEncerrado = undefined
  }

}
