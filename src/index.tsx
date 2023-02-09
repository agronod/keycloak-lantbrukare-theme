import ReactDOM from "react-dom";
import { App } from "./App";
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";
import { defaultKcProps } from "keycloakify";

import "./index.css";

ReactDOM.render(
  kcContext === undefined ? (
    <App />
  ) : (
    <KcApp
      kcContext={kcContext}
      {...{
        ...defaultKcProps,
        // NOTE: The classes are defined in ./KcApp.css
        kcFormCardClass: "my-form-card",
        kcLoginClass: "my-login",
        kcFormHeaderClass: "",
        kcFormSocialAccountClass: "my-form-social-account",
        kcFormSocialAccountContentClass: "my-form-social-account-content",
        kcFormSocialAccountListClass: "",
        kcFormSocialAccountListLinkClass: "my-form-social-account-list-link",
        kcFormOptionsWrapperClass: "my-form-options-wrapper",
        // kcHeaderWrapperClass: "my-header-wrapper",
        // kcFormSocialAccountContentClass: "my-form-social-account-content",
      }}
    />
  ),
  document.getElementById("root")
);
