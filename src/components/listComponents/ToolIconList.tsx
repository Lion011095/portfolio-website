import { iconMap } from "../../data/lists";
import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";

interface ToolIconsProps {
  tools: string[];
}

const ToolIconList = ({ tools }: ToolIconsProps) => {
  return (
    <HStack marginX={{ base: "10px", lg: "20px" }} pb={"5px"}>
      {tools.map((tool) => (
        <Icon
          key={tool}
          as={iconMap[tool]}
          color={useColorModeValue("gray.600", "gray.300")}
          boxSize={{ base: "15px", lg: "20px" }}
        />
      ))}
    </HStack>
  );
};

export default ToolIconList;
