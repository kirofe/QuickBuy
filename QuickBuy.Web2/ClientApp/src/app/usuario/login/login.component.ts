import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pikachu = "../../assets/detectivepikachu.jpg";
  public titulo  = "Pikachu";  
  public usuario;
  public returnUlr: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
     
  }

  entrar() {
    if (this.usuario.email == "teste@teste.com" && this.usuario.senha == "123") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUlr]);
    }
  }

  ngOnInit() {
    this.returnUlr = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario   = new Usuario();   
  }

}
