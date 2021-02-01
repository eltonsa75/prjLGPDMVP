import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit  {
 
  // Exibi o movimento da Barra de Progresso
  @Input() public progresso: number = 0

  constructor(){}

  ngOnInit(){
    console.log('progresso', this.progresso);
    
  }
}