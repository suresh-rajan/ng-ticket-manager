import { Component, OnInit } from '@angular/core';
import { SocketioServiceService } from '../../common/service/socketio-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId = '';
  message = '';

  constructor(private socket: SocketioServiceService, private snackBar: MatSnackBar) { }


  onReceivingMessage(data: any) {
    const activeUser = localStorage.getItem('userId');
    if (activeUser === data.receiverId) {
      this.snackBar.open('mesasge from: ' + data.senderId + '{' + data.content + '}' , 'show' , {
        duration: 2000
      });
    }
    console.log(data);
  }

  ngOnInit() {
    this.socket.setupSocketConnection();
    this.socket.consume('receive').subscribe( res => {
      this.onReceivingMessage(res);
    });
  }

  sendMessage() {
    const data: any = {};
    data.senderId = localStorage.getItem('userId');
    data.receiverId = this.userId;
    data.content = this.message;
    this.socket.publish('send' , data);
  }


}
