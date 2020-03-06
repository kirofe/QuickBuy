import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUlr: string) {
    this.baseURL = baseUlr;
  }

  public virificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    return this.http.post<Usuario>(this.baseURL + "api/usuario" , body, { headers });
  }

}
