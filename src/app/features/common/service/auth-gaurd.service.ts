import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthCheckerService } from './auth-checker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private authSvc: AuthCheckerService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.authSvc.checkAuthority()) {
      this.router.navigate(['/main/login']);
    }
    return this.authSvc.checkAuthority();
  }
}
