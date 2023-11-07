import { FaReact } from "react-icons/fa";
import { SiChakraui, SiAxios, SiHandlebarsdotjs } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandVite,
  TbBrandBootstrap,
  TbBrandVscode,
  TbBrandHtml5,
  TbLocation,
  TbBrandCss3,
} from "react-icons/tb";
import { IconType } from "react-icons";
import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";

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
    HTML: TbBrandHtml5,
    GeoLocation: TbLocation,
    CSS: TbBrandCss3,
    Handlebars: SiHandlebarsdotjs,
  };

  return (
    <HStack marginX={"20px"}>
      {tools.map((tool) => (
        <Icon
          key={tool}
          as={iconMap[tool]}
          color={useColorModeValue("gray.600", "gray.300")}
          boxSize={"20px"}
        />
      ))}
    </HStack>
  );
};

export default ToolIconList;
