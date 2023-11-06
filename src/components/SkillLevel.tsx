import { Progress, Text, Stack } from "@chakra-ui/react";

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
    <Stack w={"35%"} pr="40px" mb={5}>
      {skillLevelArr.map((skill) => (
        <>
          <Text fontWeight={500}>{skill.name}</Text>
          <Progress
            hasStripe
            isAnimated
            size={"lg"}
            value={skill.level}
            borderRadius={"10px"}
            color={barColor}
            mb={5}
          />
        </>
      ))}
    </Stack>
  );
};

export default skillLevel;
