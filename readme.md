
# Authentification Angular - Keycloak

## Ressources

https://www.npmjs.com/package/keycloak-angular
https://jwt.io/
https://www.keycloak.org/docs/7.0/server_admin
https://stackoverflow.com/questions/60437658/keycloak-angular-access-account-fails-with-403-error-and-cors-message

https://medium.com/@sairamkrish/keycloak-integration-part-2-integration-with-angular-frontend-f2716c696a28

## Exemple

### Payload token

{																			
  "jti": "8b95f70c-488f-41f5-aab9-2856015e29d7",
  "exp": 1583267318,
  "nbf": 0,
  "iat": 1583267018,
  "iss": "http://localhost:8081/auth/realms/shoppy",
  "aud": "shoppy",
  "sub": "3e3f21ed-8e8e-4403-8c5a-8fac204f41a3",
  "typ": "Bearer",
  "azp": "shoppy",
  "nonce": "8825c898-08ed-4596-8348-64b4003844e7",
  "auth_time": 1583267018,
  "session_state": "545bb67e-63af-40d6-adb1-b77eff77b9fc",
  "acr": "1",
  "allowed-origins": [
    "*"
  ],
  "realm_access": {
    "roles": [
      "shopper"
    ]
  },
  "scope": "openid good-service email profile",
  "email_verified": true,
  "groups": [
    "shopper"
  ],
  "preferred_username": "user"
}


