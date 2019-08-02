import { WebsocketService } from './websocket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public websocketService: WebsocketService) { }

  sendMessage(mensaje: string) {
    const payload = {
      de: this.websocketService,
      cuerpo: mensaje
    };
    this.websocketService.emit('mensaje', payload);
  }

  getMessages() {
    return this.websocketService.listen('mensaje-nuevo');
  }

  getMessagesPrivate() {
    return this.websocketService.listen('mensaje-privado');
  }
}
