import { Component } from '@angular/core';
import { AppAuthGuard } from './auth/app.authguard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppy-ui';

  constructor(private authService: AppAuthGuard, private router: Router) {}

  isRouteAllowed(elem: string): boolean {
    const route = this.router.config.filter((r) => r.path === elem);
    let allowed = false;
    if ( route && route.length > 0 ) {
      allowed = this.authService.isRouteAllowed(route[0].data.roles);
    }
    console.log('elem ' + elem + '=' + allowed);
    return allowed;
  }
}
