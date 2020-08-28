import { Component, OnInit } from '@angular/core';
import { AuthCheckerService } from '../../common/service/auth-checker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userId = '';
  userName = '';
  password = '';


  constructor(private authSvc: AuthCheckerService, private router: Router) { }

  ngOnInit() {
    if (this.authSvc.checkAuthority()) {
      this.router.navigate(['/main/dashboard']);
    }
  }

  register() {
    this.authSvc.createUser(this.userId, this.password, this.userName).subscribe( res => {
      if (res.userId === '') {
        alert('duplicater user');
      } else {
        alert('created successfully');
        this.router.navigate(['/main/dashboard']);
      }
    });
  }

}
