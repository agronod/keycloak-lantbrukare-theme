import type { KcContext } from "./kcContext";
import { Login } from "./Login";
import KcAppBase, { defaultKcProps } from "keycloakify";
import { useI18n } from "./i18n";

export type Props = {
  kcContext: KcContext;
};

export default function KcApp({ kcContext }: Props) {
  const i18n = useI18n({
    kcContext,
  });

  if (i18n === null) {
    return null;
  }

  const props = {
    i18n,
    ...defaultKcProps,
  };
  switch (kcContext.pageId) {
    case "login.ftl":
      return <Login {...{ kcContext, ...props }} />;
    default:
      return <KcAppBase {...{ kcContext, ...props }} />;
  }
}
