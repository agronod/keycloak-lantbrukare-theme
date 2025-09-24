import Picture from "./Picture";
import agronodLogoWebP from "../assets/agronodlogo.webp";
import agronodLogoPNG from "../assets/agronodlogo.png";

type LogoProps = {
    size: "small" | "large";
};

const Logo = ({ size }: LogoProps) => {
    return (
        <Picture
            webpSrc={agronodLogoWebP}
            fallbackSrc={agronodLogoPNG}
            alt="Logo image"
            style={{
                width: size === "small" ? 108 : 148
            }}
        />
    );
};

export default Logo;
