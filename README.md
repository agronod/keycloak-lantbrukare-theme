# Keycloak Lantbrukare Theme

Generates a custom keycloak theme based on https://github.com/InseeFrLab/keycloakify

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
yarn
yarn start
```
