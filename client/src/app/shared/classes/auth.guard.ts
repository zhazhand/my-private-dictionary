///класс который защишает роуты (гуард)
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate, CanActivateChild{

constructor(private auth: AuthService, private router: Router){}


  canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(this.auth.isAuthenticated()) {
      return of(true)
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          accessDenied: true
        }
      });
      return of(false)
    }
  }

  canActivateChild(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(rout, state)
  }
}
