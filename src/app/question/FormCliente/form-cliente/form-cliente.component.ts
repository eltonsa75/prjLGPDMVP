import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  title = "Gestão de Cadastro de Clientes";
  subTitulo = " Informações do Contato";

  constructor() { }

  ngOnInit() {
  }

}
