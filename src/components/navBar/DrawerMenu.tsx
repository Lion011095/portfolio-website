import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { TbMenu2 } from "react-icons/tb";
import NavMenu from "./NavMenu";

const MenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label={"Menu"}
        icon={<TbMenu2 />}
        onClick={onOpen}
        variant={"link"}
        color={useColorModeValue("black", "orange.300")}
        fontSize={"25px"}
      />
      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <NavMenu />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuButton;
