import { Box, Theme } from "@mui/material";
import AsideLogoSection from "../AsideLogoSection/AsideLogoSection";
import { ThemeProvider, agronodTheme } from "@agronod/mui-components";

// @ts-ignore
const BaseLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeProvider options={agronodTheme}>
            <Box
                sx={(theme: Theme) => ({
                    display: "grid",
                    minHeight: "100dvh",
                    justifyContent: "stretch",
                    [theme.breakpoints.down("sm")]: {
                        display: "block",
                        height: "100dvh",
                        overflow: "hidden"
                    }
                })}
            >
                <AsideLogoSection />

                {children}
            </Box>
        </ThemeProvider>
    );
};

export default BaseLayout;
