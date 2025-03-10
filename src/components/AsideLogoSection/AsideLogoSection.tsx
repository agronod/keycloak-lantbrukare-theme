import { Box, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../Logo";
import AgronodBackgroundDesktop from "../../assets/agronodBackgroundDesktop.png";
import AgronodBackground from "../../assets/agronodBackground.svg";
import AgronodYellowBackground from "../../assets/agronodYellowBackground.png";

const AsideLogo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            {!isMobile ? (
                <Box
                    sx={() => ({
                        display: "flex",
                        flexDirection: "column",
                        flex: "1 0 auto"
                    })}
                >
                    <Box
                        sx={theme => ({
                            backgroundColor: theme.palette.primary.main,
                            padding: 4,
                            paddingLeft: 6
                        })}
                    >
                        <Logo size="small" />
                    </Box>
                    <Box
                        sx={theme => ({
                            backgroundImage: `url(${AgronodBackground})`,
                            backgroundColor: theme.palette.primary.main,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "top left",
                            display: "flex",
                            flex: 1
                        })}
                    ></Box>
                </Box>
            ) : (
                <Box
                    sx={theme => ({
                        backgroundColor: theme.palette.primary.main,
                        display: "flex",
                        flexDirection: "column",
                        background: `url(${AgronodYellowBackground}) center center repeat , url(${AgronodBackgroundDesktop}) center center no-repeat`,
                        backgroundSize: "cover, 100% 99%",
                        width: "100%",
                        maxWidth: "100%",
                        textAlign: "left",
                        marginBottom: 5,
                        position: "fixed",
                        top: 0,
                        backgroundPosition: "center",
                        height: "219px",
                        padding: 3
                    })}
                >
                    <Logo size="small" />
                </Box>
            )}
        </>
    );
};

export default AsideLogo;
