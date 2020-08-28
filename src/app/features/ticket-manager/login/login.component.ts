import { Component, OnInit } from '@angular/core';
import { AuthCheckerService } from '../../common/service/auth-checker.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthCheckerService, private router: Router) { }
  userId = '';
  password = '';
  ngOnInit() {
    if (this.authSvc.checkAuthority()) {
      this.router.navigate(['/main/dashboard']);
    }
  }

  login() {

    this.authSvc.login(this.userId, this.password).pipe(catchError(this.authSvc.handleError)).subscribe(res => {

      if (res) {
        this.router.navigate(['/main/dashboard']);
        return;
      }

      console.log('invalid');

    });
  }

}
