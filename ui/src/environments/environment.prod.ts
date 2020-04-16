import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost/auth/',
  realm: 'shoppy',
  clientId: 'shoppy-ui',
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
  apiUrl : 'http://localhost/api',
};
