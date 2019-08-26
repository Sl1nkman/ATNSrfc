import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class CcrHttpInterceptor implements HttpInterceptor {
    constructor( private cookieService: CookieService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const Authorization = this.cookieService.get('jwt');
        if (Authorization) {
            req = req.clone({ headers: req.headers.set('Authorization', Authorization) });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                 // req.headers.append('Authorization', 'Bearer ' + Authorization);
                if (event instanceof HttpResponse) {
                }
                return event;
            }));
    }


}