import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthCheckerService } from 'src/app/features/common/service/auth-checker.service';

@Component({
  selector: 'app-ticket-manager-header',
  templateUrl: './ticket-manager-header.component.html',
  styleUrls: ['./ticket-manager-header.component.css']
})
export class TicketManagerHeaderComponent implements OnInit {

  constructor(private router: Router, public authSvc: AuthCheckerService, private route: ActivatedRoute) { }

  active = 'login';
  isLoggedOn  = false;
  ngOnInit() {
    this.router.events.subscribe( res => {
      if (res instanceof NavigationEnd ) {
        console.log(res);
        this.active = res.url.replace('/main/', '');

        // if (this.active === 'dashboard') { this.active = 'search'}

      }
     });
  }

  onClick(name: string) {

    if (name === 'logout') {
      this.active = 'login';
      this.authSvc.logout();
      return;
    }
    if (this.authSvc.checkAuthority()) {
      this.active = name;
    } else {
      this.active = name !== 'register' ? 'login' : name;
    }
    this.router.navigate(['/main/' + this.active ]);
  }

  getClass(name: string): string {

    if (name === this.active) {
      return 'w3-bar-item w3-button w3-green';
    }
    return 'w3-bar-item w3-button';
  }

  getUserActiveClass(name: string) {

    if (this.active === name) {
      return 'w3-right w3-bar-item w3-button w3-green';
    }
    return 'w3-right w3-bar-item w3-button';
  }

}
