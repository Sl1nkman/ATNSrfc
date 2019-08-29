/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {RouteAuthorisationService} from '../services/route-authorisation.service';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate , CanActivateChild {

  constructor(
      private routeAuthorisationService: RouteAuthorisationService,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.routeAuthorisationService.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      swal('Unauthorised', 'Please contact your administrator', 'error');
    }
    return isAuthorized;
  }
  canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = childRoute.data.allowedRoles;
    const isAuthorized = this.routeAuthorisationService.isAuthorized(allowedRoles);
    if (!isAuthorized) {
      // if not authorized, show access denied message
      swal('Unauthorised', 'Please contact your administrator', 'error');
    }
    return isAuthorized;
  }
}

