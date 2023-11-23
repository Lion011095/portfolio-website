import { HStack, Text } from "@chakra-ui/react";
import ToolIconList from "./listComponents/ToolIconList";

interface SkillLevelTitleProps {
  skillName: string;
}

const SkillLevelTitle = ({ skillName }: SkillLevelTitleProps) => {
  return (
    <HStack justify={"space-between"}>
      <Text fontWeight={500}>{skillName}</Text>
      <ToolIconList tools={[skillName]} />
    </HStack>
  );
};

export default SkillLevelTitle;
