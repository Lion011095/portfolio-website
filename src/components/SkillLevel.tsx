import { Progress, Stack, Box } from "@chakra-ui/react";
import SkillLevelTitle from "./SkillLevelTitle";

export interface skillLevel {
  name: string;
  level: number;
}

interface skillLevelProps {
  skillLevelArr: skillLevel[];
  barColor: string;
}

const skillLevel = ({ skillLevelArr, barColor }: skillLevelProps) => {
  return (
    <Stack w={"50%"} pr="40px" mb={5}>
      {skillLevelArr.map((skill) => (
        <Box key={skill.name}>
          <SkillLevelTitle skillName={skill.name} />
          <Progress
            hasStripe
            isAnimated
            size={"lg"}
            value={skill.level}
            borderRadius={"10px"}
            color={barColor}
            mb={5}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default skillLevel;
