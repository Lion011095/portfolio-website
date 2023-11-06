import { FaReact } from "react-icons/fa";
import { SiChakraui, SiAxios } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandVite,
  TbBrandBootstrap,
  TbBrandVscode,
} from "react-icons/tb";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface ToolIconsProps {
  tools: string[];
}

const ToolIconList = ({ tools }: ToolIconsProps) => {
  const iconMap: { [key: string]: IconType } = {
    TypeScript: TbBrandTypescript,
    JavaScript: TbBrandJavascript,
    NodeJS: TbBrandNodejs,
    Vite: TbBrandVite,
    ChakraUI: SiChakraui,
    React: FaReact,
    Bootstrap: TbBrandBootstrap,
    VSCode: TbBrandVscode,
    Axios: SiAxios,
  };

  return (
    <HStack marginX={"20px"}>
      {tools.map((tool) => (
        <Icon key={tool} as={iconMap[tool]} color="gray.400" boxSize={"20px"} />
      ))}
    </HStack>
  );
};

export default ToolIconList;
