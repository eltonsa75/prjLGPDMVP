import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private usuario: Usuario =  new Usuario();

  constructor(private authoService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.authoService.fazerLogin(this.usuario);
  }

}
