import { memo } from "react";
import { KcContextBase, KcProps } from "keycloakify";
import Template from "keycloakify/lib/Template";
import BaseLayout from "components/BaseLayout/BaseLayout";
import type { I18n } from "./i18n";
import { Box } from "@mui/material";

export const Login = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContextBase.Login; i18n: I18n } & KcProps) => {
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
                <span>
                  <b>Hej!</b>
                  <br />
                  <br />I dag genomför vi en teknisk uppdatering av Agrosfär
                  och Agronod-plattformen. Därför kan du just nu inte logga
                  in. Du är varmt välkommen tillbaka så snart uppdateringen är
                  klar.
                  <br />
                  <br />
                  Har du frågor? Hör gärna av dig till oss på
                  {" "}<b>010-18 61 060</b>
                  {" "}eller
                  {" "}<a href="mailto:support@agronod.com">support@agronod.com</a>
                  .
                </span>
              </Box>
            </Box>
          }
        />
      </BaseLayout>
    );
  },
);
