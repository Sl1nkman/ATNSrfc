/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};
interface isLoggedIn {
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn> {

    return this.http.post<isLoggedIn>('/ATNSCCR_PHP/backend/api2/isloggedin.php', httpOptions );
  }
}
