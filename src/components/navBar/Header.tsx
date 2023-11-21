import { HStack, Hide, Image, Show, useColorModeValue } from "@chakra-ui/react";
import lionLogo from "../../assets/LionLogo.webp";
import ColorThemeSwitch from "./ColorThemeSwitch";
import NavMenu from "./NavMenu";
import MenuButton from "./DrawerMenu";

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
      <HStack spacing={0}>
        <Image
          mb="2px"
          src={lionLogo}
          boxSize={10}
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          cursor={"pointer"}
        />
        <Hide above="md">
          <MenuButton />
        </Hide>
      </HStack>
      <Show above="md">
        <HStack>
          <NavMenu />
        </HStack>
      </Show>
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
