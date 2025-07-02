import { Box, Theme } from "@mui/material";
import AsideLogoSection from "../AsideLogoSection/AsideLogoSection";
import { AgronodCard } from "@agronod/mui-components";
import { ThemeProvider, agronodTheme } from "@agronod/mui-components";

const BaseLayout = (props: { children: JSX.Element }) => {
    return (
        <ThemeProvider options={agronodTheme}>
            <Box
                sx={(theme: Theme) => ({
                    display: "grid",
                    minHeight: "100dvh",
                    backgroundColor: "red",
                    justifyContent: "stretch",
                    position: "relative",
                    [theme.breakpoints.down("sm")]: {
                        display: "block",
                        height: "100dvh",
                        overflow: "hidden"
                    }
                })}
            >
                <AsideLogoSection />

                <AgronodCard
                    sx={(theme: Theme) => ({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: 4,
                        padding: theme.spacing(8),
                        maxWidth: "464px"
                    })}
                >
                    {props.children}
                </AgronodCard>
            </Box>
        </ThemeProvider>
    );
};

export default BaseLayout;
