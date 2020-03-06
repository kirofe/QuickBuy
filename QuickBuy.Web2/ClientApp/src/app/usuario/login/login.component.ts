import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pikachu = "../../assets/detectivepikachu.jpg";
  public titulo  = "Pikachu";  
  public usuario;

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "teste@teste.com" && this.usuario.senha == "123") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
