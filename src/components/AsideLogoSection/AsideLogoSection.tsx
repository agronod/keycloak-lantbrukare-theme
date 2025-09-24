import { Box } from "@mui/material";
import Logo from "../Logo";
import agronodBackground from "../../assets/agronodBackground.svg";

const AsideLogo = () => {
    return (
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
    );
};

export default AsideLogo;
