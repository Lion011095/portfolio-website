import name from "../assets/Lion glitch 800.gif";
import { Image, Heading, useColorModeValue, VStack } from "@chakra-ui/react";

const MainTitle = () => {
  return (
    <VStack mx={"20px"} mt={20} mb={[0, 5, 10]}>
      <Image src={name} borderBottom={"solid"} borderBottomWidth={1} />
      <Heading
        as={"h2"}
        size={"lg"}
        color={useColorModeValue("orange.400", "orange.300")}
        id="about"
      >
        Full-Stack Developer
      </Heading>
    </VStack>
  );
};

export default MainTitle;
