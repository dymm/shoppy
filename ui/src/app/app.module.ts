import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAuthGuard } from './auth/app.authguard';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ApiModule } from 'src/typescript-angular-client';
import { HttpClientModule } from '@angular/common/http';
import { ItemCreateComponent } from './item-create/item-create.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: environment.keycloak,
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false,
      enableLogging: true,
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    ApiModule,
  ],
  providers: [
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
