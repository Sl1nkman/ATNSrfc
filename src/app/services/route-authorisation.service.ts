import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RouteAuthorisationService {

  constructor( private cookieService: CookieService) {}

  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    const token = this.cookieService.get('jwt');

    // decode token to read the payload details
    const decodeToken = decode(token);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken.data.role);
  }
}
