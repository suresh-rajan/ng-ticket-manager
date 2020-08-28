import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioServiceService {

  socket;
  constructor() { }

  setupSocketConnection() {

    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        token: 'cde'
      }
    });
  }

  publish(endpoint: string, data: any) {
    this.socket.emit(endpoint, data);
  }

  consume(endpoint: string) {
    const  observable = new Observable(observer => {
      this.socket.on(endpoint, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
