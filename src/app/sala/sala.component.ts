import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { Route, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private chatService: ChatService) { }
  usuario: Usuario = {id: 0, nick: ''};

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.chatService.getUsuarioById(id).subscribe(
      usuarioRecibido => this.usuario = usuarioRecibido
    )

  }

}
