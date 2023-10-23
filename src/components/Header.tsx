import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import lionLogo from "../assets/LionLogo.webp";
import ColorThemeSwitch from "./ColorThemeSwitch";

const Header = () => {
  const bg = useColorModeValue("orange.400", "blackAlpha.700");
  const textColor = useColorModeValue("black", "orange.300");

  return (
    <HStack
      color={textColor}
      bg={bg}
      paddingX={"5px"}
      justifyContent={"space-between"}
    >
      <Image marginBottom="2px" src={lionLogo} boxSize={10} />
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
