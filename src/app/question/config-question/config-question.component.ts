import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-question',
  templateUrl: './config-question.component.html',
  styleUrls: ['./config-question.component.css']
})
export class ConfigQuestionComponent implements OnInit {

  title = "Configurações de Questionario";

  constructor() { }

  ngOnInit() {
  }

}
