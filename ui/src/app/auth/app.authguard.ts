import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Injectable()
export class AppAuthGuard extends KeycloakAuthGuard implements CanActivate {
  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    console.log('isAccessAllowed ' + route);
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }
      console.log('role restriction given at app-routing.module for this route', route.data.roles);
      console.log('User roles coming after login from keycloak :', this.roles);
      const requiredRoles = route.data.roles;
      const granted = this.isRouteAllowed(route.data.roles);
      resolve(granted);

    });
  }
  
  isRouteAllowed(requiredRoles: string[]): boolean {
    let granted = false;
    if (!this.roles) {
      return granted;
    }
    if (!requiredRoles || requiredRoles.length === 0) {
      granted = true;
    } else {
      for (const requiredRole of requiredRoles) {
        if (this.roles.indexOf(requiredRole) > -1) {
          granted = true;
          break;
        }
      }
    }
    return granted;
  }
}
