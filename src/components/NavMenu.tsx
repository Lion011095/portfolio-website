import { Text, HStack } from "@chakra-ui/react";

const NavMenu = () => {
  const menu: string[] = [
    "ABOUT",
    "EDUCATION",
    "SKILLS",
    "PORTFOLIO",
    "CONTACT",
  ];

  return (
    <HStack>
      {menu.map((item) => (
        <Text mx={3} as={"b"}>
          {item}
        </Text>
      ))}
    </HStack>
  );
};

export default NavMenu;
