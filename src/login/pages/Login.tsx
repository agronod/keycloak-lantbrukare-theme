import { FormEventHandler, useEffect, useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Box, Button, FormControl, FormLabel, Link, Stack, TextField, Typography, useTheme, Divider } from "@mui/material";
import { useConstCallback } from "powerhooks/useConstCallback";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const [username, setUsername] = useState("");
    const theme = useTheme();

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField, social } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
        e.preventDefault();
        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

        formElement.submit();
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUsername(e.target.value);

    useEffect(() => {
        if (login.username) {
            setUsername(login.username);
        }
    }, [login.username]);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("customLoginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            // infoNode={
            //     <div id="kc-registration-container">
            //         <div id="kc-registration">
            //             <span>
            //                 {msg("noAccount")}{" "}
            //                 <a tabIndex={8} href={url.registrationUrl}>
            //                     {msg("doRegister")}
            //                 </a>
            //             </span>
            //         </div>
            //     </div>
            // }
            socialProvidersNode={
                <>
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <Box sx={{ mt: 3, display: "none" }}>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {msg("identity-provider-login-label")}
                            </Typography>
                            <Stack spacing={2}>
                                {social.providers.map(p => (
                                    <Button
                                        key={p.alias}
                                        id={`social-${p.alias}`}
                                        variant="outlined"
                                        fullWidth
                                        href={p.loginUrl}
                                        sx={{
                                            justifyContent: "flex-start",
                                            textTransform: "none",
                                            py: 1.5
                                        }}
                                        startIcon={
                                            p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true" />
                                        }
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }} />
                                    </Button>
                                ))}
                            </Stack>
                        </Box>
                    )}
                </>
            }
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    {realm.password && (
                        <Box
                            component="form"
                            id="kc-form-login"
                            onSubmit={onSubmit}
                            action={url.loginAction}
                            method="post"
                            sx={{
                                display: "grid",
                                gap: 3,
                                width: "100%"
                            }}
                        >
                            {!usernameHidden && (
                                <FormControl fullWidth={true}>
                                    {(() => {
                                        const label = !realm.loginWithEmailAllowed
                                            ? "username"
                                            : realm.registrationEmailAsUsername
                                              ? "email"
                                              : "usernameOrEmail";

                                        const autoCompleteHelper: typeof label = label === "usernameOrEmail" ? "username" : label;

                                        return (
                                            <>
                                                <FormLabel>
                                                    <Typography variant="body3" sx={{ marginBottom: 0.5, display: "block" }}>
                                                        E-postadress
                                                    </Typography>
                                                </FormLabel>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder={msgStr(label)}
                                                    autoFocus
                                                    //NOTE: This is used by Google Chrome auto fill so we use it to tell
                                                    //the browser how to pre fill the form but before submit we put it back
                                                    //to username because it is what keycloak expects.
                                                    name={autoCompleteHelper}
                                                    id={autoCompleteHelper}
                                                    type="text"
                                                    value={username}
                                                    onChange={e => handleOnChange(e)}
                                                />
                                            </>
                                        );
                                    })()}
                                </FormControl>
                            )}

                            <FormControl fullWidth={true}>
                                <FormLabel>
                                    <Typography variant="body3" sx={{ marginBottom: 0.5, display: "block" }}>
                                        Lösenord
                                    </Typography>
                                </FormLabel>

                                <TextField fullWidth={true} placeholder={msgStr("password")} name="password" id="password" type="password" />
                            </FormControl>

                            <Box>
                                {realm.resetPasswordAllowed && (
                                    <Stack flexDirection="row" gap={1}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: `${theme.palette.text.primary} !important`
                                            }}
                                        >
                                            {msg("forgotPassword")}
                                        </Typography>
                                        <Link
                                            tabIndex={5}
                                            href={url.loginResetCredentialsUrl}
                                            sx={{
                                                // TODO: remove when you update storybook to a new version
                                                "&:hover": {
                                                    color: theme.palette.text.secondary,
                                                    textDecoration: "underline solid #66646199"
                                                }
                                            }}
                                        >
                                            {/* {msg("doForgotPassword")} */}
                                            <span>Reset</span>
                                        </Link>
                                    </Stack>
                                )}
                            </Box>

                            <Stack
                                id="kc-form-buttons"
                                sx={() => ({
                                    alignItems: "center",
                                    gap: 0.5,
                                    position: "absolute",
                                    bottom: "20px",
                                    left: 0,
                                    right: 0,
                                    [theme.breakpoints.down("sm")]: {
                                        position: "relative",
                                        marginTop: `16px !important`
                                    }
                                })}
                            >
                                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                <Button
                                    variant="contained"
                                    fullWidth={true}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    disabled={isLoginButtonDisabled}
                                >
                                    {msgStr("doLogIn")}
                                </Button>
                            </Stack>
                        </Box>
                    )}
                </div>
            </div>
        </Template>
    );
}

// function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
//     const { kcClsx, i18n, passwordInputId, children } = props;

//     const { msgStr } = i18n;

//     const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({ passwordInputId });

//     return (
//         <div className={kcClsx("kcInputGroup")}>
//             {children}
//             <button
//                 type="button"
//                 className={kcClsx("kcFormPasswordVisibilityButtonClass")}
//                 aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
//                 aria-controls={passwordInputId}
//                 onClick={toggleIsPasswordRevealed}
//             >
//                 <i className={kcClsx(isPasswordRevealed ? "kcFormPasswordVisibilityIconHide" : "kcFormPasswordVisibilityIconShow")} aria-hidden />
//             </button>
//         </div>
//     );
// }
