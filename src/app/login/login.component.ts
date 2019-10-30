import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { Router }          from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {id:0, nick:""};

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    
  }

  validarUsuario(){
    this.chatService.getUsuarioByName(this.usuario.nick).subscribe(
          usuarioRecibido => {
            if (usuarioRecibido[0] == null) {
              this.chatService.insertUsuario(this.usuario).subscribe(
                userNew => {
                  this.usuario = userNew;
                  this.redireccionarSalas(this.usuario.id);
                }
              );
            } else {
              this.usuario = usuarioRecibido;
              this.redireccionarSalas(this.usuario[0].id);
            }
          }
      );
  }

  redireccionarSalas(id){
    this.router.navigate(['/chat/salas',id]);
  }


}
