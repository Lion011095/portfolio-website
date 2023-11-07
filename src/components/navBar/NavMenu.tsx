import { Text, HStack } from "@chakra-ui/react";
import { menu } from "../../data/lists";

const NavMenu = () => {
  return (
    <HStack>
      {menu.map((item) => (
        <Text mx={3} as={"b"} key={item}>
          <a href={"#" + item.toLowerCase()}>{item}</a>
        </Text>
      ))}
    </HStack>
  );
};

export default NavMenu;
