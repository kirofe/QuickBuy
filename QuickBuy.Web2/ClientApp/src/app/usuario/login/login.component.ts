import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pikachu = "../../assets/detectivepikachu.jpg";
  public titulo  = "Pikachu";  
  public usuario;
  public usuarioAutenticado: boolean;
  
  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "teste@teste.com" && this.usuario.senha == "123") 
      this.usuarioAutenticado = true;
    else
      this.usuarioAutenticado = false;
  }

  ngOnInit() {
  }

}
