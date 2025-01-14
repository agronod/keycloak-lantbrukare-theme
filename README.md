# Keycloak Lantbrukare Theme

Custom keycloak theme based on <https://github.com/InseeFrLab/keycloakify>

## Prevent user login

1. Set {realm}/Realm settings/Themes/Login themes=agronod-lantbrukare-theme-maintenance
2. Clear {realm}/Authentication/Flows(Browser)/Identity Provider Redirector(visma) - Config/Default Identity Provider

### Enable user login

1. Set {realm}/Realm settings/Themes/Login themes=agronod-lantbrukare-theme
2. Set {realm}/Authentication/Flows(Browser)/Identity Provider Redirector(visma) - Config/Default Identity Provider=visma

## Running locally

Edit (do not forget to undo before publishing)

```typescript
import { getKcContext } from "keycloakify";

 const { kcContext } = getKcContext({
+    "mockPageId": "login.ftl"
 });
```

and run

```bash
npm install
npm start
```

## Running locally with Docker

Requires - OpenJDK 17 or higher - maven

run `npm run keycloak`

In terminal you will get the following message on how to proceed:

```
To test your theme locally you can spin up a Keycloak 19.0.1 container image with the theme pre loaded by running:

👉 $ ./build_keycloak/start_keycloak_testing_container.sh 👈

Test with different Keycloak versions by editing the .sh file. see available versions here: https://quay.io/repository/keycloak/keycloak?tab=tags

Once your container is up and running:
- Log into the admin console 👉 http://localhost:8080/admin username: admin, password: admin 👈
- Create a realm named "myrealm"
- Create a client with ID: "myclient", "Root URL": "https://www.keycloak.org/app/" and "Valid redirect URIs": "https://www.keycloak.org/app/*"
- Select Login Theme: agronod-b2b-theme (don't forget to save at the bottom of the page)
- Go to 👉 https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in". You should see your login page

Video demoing this process: https://youtu.be/N3wlBoH4hKg`

Theme templates: https://github.com/keycloakify/keycloakify
Npm keycloakify: https://www.npmjs.com/package/keycloakify
Guide keycloakify: https://docs.keycloakify.dev/v/v6/
Keycloakify starter page: https://github.com/keycloakify/keycloakify-starter/tree/main
```
