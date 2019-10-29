import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'http://localhost:3000/usuarios/';
  usuario: Usuario[];


  constructor(private http: HttpClient) { }


  getUsuarioByName(nick: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.url+'?nick=' + nick).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en la petición de la tarea ${nick}: ` + err.message);
          console.warn(err);
          console.warn(caught);
          const usuario: Usuario = { id: 0, nick: ''};
          return of(usuario);
        }
      )
    );
  }


  insertUsuario(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, user).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en el alta del usuario: ` + err.message);
          console.warn(err);
          console.warn(caught);
          return of(user);
        }
      )
    );
  }
}

