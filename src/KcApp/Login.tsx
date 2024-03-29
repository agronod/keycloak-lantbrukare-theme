import { memo } from "react";
import { KcContextBase, KcProps } from "keycloakify";
import Template from "keycloakify/lib/Template";
import BaseLayout from "components/BaseLayout/BaseLayout";
import type { I18n } from "./i18n";
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

export const Login = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContextBase.Login; i18n: I18n } & KcProps) => {
    const { social } = kcContext;
    //In this theme we are using Login to show just in cancel request, otherwwise we skip it. We left just necessary ui parts in this teme, other functionality can be added and styled later if needed from templates.
    return (
      <BaseLayout>
        <Template
          {...{ kcContext, i18n, ...props }}
          // Set to false so we don't use keycloak styles but our MUI ones
          doFetchDefaultThemeResources={false}
          displayInfo={false}
          displayWide={true}
          headerNode={null}
          formNode={
            <Box id="kc-form">
              <Box id="kc-form-wrapper">
                {social.providers !== undefined && (
                  <Box id="kc-social-providers">
                    {/* TODO: check can we improve cancel request ui and handling */}
                    <List>
                      {social.providers.map((p) =>
                        p.alias === "visma" ? (
                          <Stack
                            component={ListItem}
                            gap={2}
                            alignItems="center"
                            key={p.providerId}
                          >
                            <Typography variant="h4">Du är utloggad</Typography>
                            <Button variant="contained" href={p.loginUrl}>
                              Logga in
                            </Button>
                          </Stack>
                        ) : (
                          <ListItem key={p.providerId}>
                            <Link href={p.loginUrl} id={`zocial-${p.alias}`}>
                              {p.displayName}
                            </Link>
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}
              </Box>
            </Box>
          }
        />
      </BaseLayout>
    );
  }
);
