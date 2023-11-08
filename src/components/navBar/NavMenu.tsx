import { HStack, useColorModeValue, Button } from "@chakra-ui/react";
import { menu } from "../../data/lists";

const NavMenu = () => {
  const location = [80, 1145, 2175, 3220, 10000];

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
        >
          {item}
        </Button>
      ))}
    </HStack>
  );
};

export default NavMenu;
