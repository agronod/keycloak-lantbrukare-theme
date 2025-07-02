import { Box, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../Logo";
import Picture from "../Picture";
import agronodBackgroundDesktopWebP from "../../assets/agronodBackgroundDesktop.webp";
import agronodBackgroundDesktopPNG from "../../assets/agronodBackgroundDesktop.png";
import agronodBackground from "../../assets/agronodBackground.svg";
import agronodYellowBackgroundWebP from "../../assets/agronodYellowBackground.webp";
import agronodYellowBackgroundPNG from "../../assets/agronodYellowBackground.png";

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
                            backgroundImage: `url(${agronodBackground})`,
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
                        width: "100%",
                        maxWidth: "100%",
                        textAlign: "left",
                        height: "100vh",
                        position: "relative",
                        padding: 3,
                        overflow: "hidden"
                    })}
                >
                    <Picture
                        webpSrc={agronodBackgroundDesktopWebP}
                        fallbackSrc={agronodBackgroundDesktopPNG}
                        alt="Background"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "99%",
                            objectFit: "cover",
                            zIndex: 1
                        }}
                    />
                    <Picture
                        webpSrc={agronodYellowBackgroundWebP}
                        fallbackSrc={agronodYellowBackgroundPNG}
                        alt=""
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 2
                        }}
                    />
                    <Box sx={{ position: "relative", zIndex: 3 }}>
                        <Logo size="small" />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default AsideLogo;
