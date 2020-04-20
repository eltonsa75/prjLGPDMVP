import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuthenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' &&
     usuario.senha === '123456') {
        this.usuarioAuthenticado = true;

        this.router.navigate(['/question/menu']);
     }
  }
}
