import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pikachu = "../../assets/detectivepikachu.jpg";
  public titulo  = "Pikachu";
  public email = "";
  public senha = "";

  constructor() { }

  entrar() {
    alert(this.email + " - " + this.senha);
  }

  ngOnInit() {
  }

}
