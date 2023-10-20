import { HStack, Text, Image } from "@chakra-ui/react";
import lionLogo from "../assets/LionLogo.webp";

const Header = () => {
  return (
    <HStack paddingX={"5px"}>
      <Image marginBottom="2px" src={lionLogo} boxSize={10} />
      <Text>Menu</Text>
      <Text>Header</Text>
    </HStack>
  );
};

export default Header;
