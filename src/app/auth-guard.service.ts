import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate() {
        if(!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/question')
            return false
        }
        return true
    }
}