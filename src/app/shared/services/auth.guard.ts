import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
  export class AuthGaurd implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if (this.auth.isAuthenticated()) {
        console.log('Passed');
        return true;
      } else {
        console.log('Blocked');
        this.router.navigate(['']);
        return false;
      }
    }
  }
