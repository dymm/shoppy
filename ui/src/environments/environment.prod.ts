import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8081/auth/',
  realm: 'shoppy',
  clientId: 'shoppy',
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
};
