import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import lionLogo from "../assets/LionLogo.webp";
import ColorThemeSwitch from "./ColorThemeSwitch";
import NavMenu from "./NavMenu";

const Header = () => {
  const bg = useColorModeValue("orange.400", "blackAlpha.700");
  const textColor = useColorModeValue("black", "orange.300");

  return (
    <HStack
      color={textColor}
      bg={bg}
      pr={"10px"}
      pl={"7px"}
      justifyContent={"space-between"}
    >
      <Image mb="2px" src={lionLogo} boxSize={10} />
      <NavMenu />
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
