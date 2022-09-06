import { memo } from "react";
import type { KcContext } from "./kcContext";
import { Login } from "./Login";
import { Info } from "keycloakify/lib/components/Info";
import { Error } from "keycloakify/lib/components/Error";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import { KcProps } from "keycloakify";

export const KcApp = memo(
  ({ kcContext, ...props }: { kcContext: KcContext } & KcProps) => {
    switch (kcContext.pageId) {
      case "login.ftl":
        return <Login {...{ kcContext, ...props }} />;
      case "info.ftl":
        return <Info {...{ kcContext, ...props }} />;
      case "error.ftl":
        return <Error {...{ kcContext, ...props }} />;
      default:
        return <KcAppBase {...{ kcContext, ...props }} />;
    }
  }
);
