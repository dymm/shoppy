import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(protected keycloakAngular: KeycloakService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
         this.keycloakAngular.getToken()
        .then((token: string) => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        })
        .catch( (reason: any) => {
            console.log('Error while geting token :' + reason);
        });

         return next.handle(request);
    }
}
