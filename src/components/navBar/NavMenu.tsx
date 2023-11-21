import { useColorModeValue, Button } from "@chakra-ui/react";
import { menu } from "../../data/lists";

const NavMenu = () => {
  const handleClickScroll = (elmnt: string) => {
    const element = document.getElementById(elmnt);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <>
      {menu.map((item) => (
        <Button
          mx={3}
          fontWeight={500}
          key={item}
          color={useColorModeValue("black", "orange.300")}
          variant={"link"}
          onClick={() => {
            handleClickScroll(item.toLowerCase());
          }}
          _hover={{
            textDecor: "none",
            color: useColorModeValue("blue.500", "gray.200"),
          }}
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default NavMenu;
