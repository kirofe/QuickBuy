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

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    alert(this.usuario.email + " - " + this.usuario.senha);
  }

  ngOnInit() {
  }

}
