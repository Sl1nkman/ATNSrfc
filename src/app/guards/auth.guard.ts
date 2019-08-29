/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { OathService } from '../services/oath.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private oath: OathService , private router: Router , private user: UserService ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.oath.isLoggedIn) {
      return true;

    }
    return this.user.isLoggedIn().pipe( map(res => {
      if (res.status) {
        this.oath.setLoggedIn(true);
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }));
  }
}
