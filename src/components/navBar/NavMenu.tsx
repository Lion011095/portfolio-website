import { HStack, useColorModeValue, Button } from "@chakra-ui/react";
import { menu } from "../../data/lists";

const NavMenu = () => {
  const location = [255, 1100, 2132, 3172, 5000];

  return (
    <HStack>
      {menu.map((item) => (
        <Button
          mx={3}
          fontWeight={500}
          key={item}
          color={useColorModeValue("black", "orange.300")}
          variant={"link"}
          onClick={() => {
            scrollTo({ top: location[menu.indexOf(item)], behavior: "smooth" });
          }}
          _hover={{
            textDecor: "none",
            color: useColorModeValue("blue.500", "gray.200"),
          }}
        >
          {item}
        </Button>
      ))}
    </HStack>
  );
};

export default NavMenu;
