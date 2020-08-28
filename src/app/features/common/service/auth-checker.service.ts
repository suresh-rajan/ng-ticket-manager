import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

const BASE_URL = '/ticketmanager/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckerService {


  constructor(private httpClient: HttpClient, private router: Router) { }

  // tslint:disable: object-literal-shorthand
  login(userId: string, password: string) {
    return this.httpClient.post<any>(BASE_URL + '/authenticate', {
      userId: userId,
      password: password
    }).pipe(
      map(
        res => {
          const tokenStr = 'Bearer ' + res.token;
          localStorage.setItem('token', tokenStr);
          localStorage.setItem('userId', userId);
          return true;
        },
        err => {
          console.log(err);
          return false;
        }
      )
    );
  }

  createUser(userId: string, password: string, username: string) {
    return this.httpClient.post<any>(BASE_URL + '/create', {
      userId: userId,
      password: password,
      userName: username
    });
  }

  checkAuthority(): boolean {
    if (localStorage.getItem('userId') && localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage = error.message;

    if (error.status !== 401) {
      console.log(error);
      return throwError(errorMessage);
    }

    if (localStorage.getItem('userId') && localStorage.getItem('token')) { 
      alert('Session Disconnected');
    } else {
      alert('Invalid Credentials');
    }
    return throwError(errorMessage);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/main/login']);
  }
}
