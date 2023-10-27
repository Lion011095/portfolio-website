import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill, BsMoonStarsFill } from "react-icons/bs";

const ColorThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="orange"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={colorMode === "dark" ? BsMoonStarsFill : BsFillSunFill} />
    </HStack>
  );
};

export default ColorThemeSwitch;
