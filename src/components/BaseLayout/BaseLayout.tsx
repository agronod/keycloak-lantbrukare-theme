import { Box, Theme } from "@mui/material";
import AsideLogoSection from "../AsideLogoSection/AsideLogoSection";
import { AgronodAsideCard } from "@agronod/mui-components";
import { ThemeProvider, agronodTheme } from "@agronod/mui-components";

const BaseLayout = (props: { children: JSX.Element }) => {
    return (
        <ThemeProvider options={agronodTheme}>
            <Box
                sx={(theme: Theme) => ({
                    display: "grid",
                    minHeight: "100dvh",
                    justifyContent: "stretch",
                    [theme.breakpoints.down("sm")]: {
                        display: "block",
                        height: "auto",
                        overflow: "auto"
                    }
                })}
            >
                <AsideLogoSection />
            </Box>
        </ThemeProvider>
    );
};

export default BaseLayout;
