import { VStack, Text, Heading } from "@chakra-ui/react";
import SkillList from "./listComponents/SkillList";
import { softSkills, techSkills } from "../data/lists";

interface AboutProps {
  color: string;
}

const About = ({ color }: AboutProps) => {
  const subHeadingWeight = 500;

  return (
    <VStack id="about" justify={"center"} w={"60%"}>
      <Heading
        as={"h3"}
        size={"md"}
        fontWeight={subHeadingWeight}
        color={color}
      >
        About Me
      </Heading>
      <Text maxW={630}>
        Motivated software developer with a strong desire to excel in a
        fast-paced environment with focus on innovative problem-solving.
      </Text>
      <SkillList
        skillList={softSkills}
        skillTitle="Soft Skills"
        weight={subHeadingWeight}
        color={color}
      />

      <SkillList
        skillList={techSkills}
        skillTitle="Technical Skills"
        weight={subHeadingWeight}
        color={color}
      />
    </VStack>
  );
};

export default About;
