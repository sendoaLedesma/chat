import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {id:0, nick:""};

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  getUsuario(){
    this.chatService.getUsuarioByName(this.usuario.nick).subscribe(
          usuarioRecibido => this.usuario = usuarioRecibido
       );
    
  }


}
