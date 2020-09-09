import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  title = "Gestão de Empresa";
  subTitulo = " Informações do Contato";

  constructor() { }

  ngOnInit() {
  }

}
