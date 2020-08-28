import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthCheckerService } from '../common/service/auth-checker.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private auth: AuthCheckerService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.auth.login('skndy', 'admin').subscribe(res => {
      console.log(res);
      this.httpClient.get('/ticketmanager/helloworld/get').subscribe( res => console.log(res));
    });
  }

}
