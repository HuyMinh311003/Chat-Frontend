import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: any) {
    this.socket.emit('message', msg);
  }

  getMessage(roomID: string) {
    return this.socket.fromEvent(`message-${roomID}`);
  }
}
