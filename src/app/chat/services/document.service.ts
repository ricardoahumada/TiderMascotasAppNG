import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from '../modelos/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('document');

  constructor(private socket: Socket) {
    this.socket.on('msg', function (data) {
      console.log('data:', data);
    });
  }

  sendMess(obj) {
    this.socket.emit('msg', obj);
  }


}
