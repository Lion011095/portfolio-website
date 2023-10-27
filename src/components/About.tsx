import {
  VStack,
  Image,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import name from "../assets/Lion glitch 800.gif";
import SkillList from "./SkillList";
import { softSkills, techSkills } from "../data/lists";

interface AboutProps {
  color: string;
}

const About = ({ color }: AboutProps) => {
  const subHeadingWeight = 500;

  return (
    <VStack
      textAlign={"left"}
      pt={"60px"}
      borderBottom={"solid"}
      borderBottomWidth={1}
      px="164px"
      borderBottomColor={color}
      id="about"
    >
      <Image src={name} borderBottom={"solid"} />
      <Heading
        as={"h2"}
        size={"lg"}
        mb={10}
        color={useColorModeValue("orange.400", "orange.300")}
      >
        Full-Stack Developer
      </Heading>
      <Heading
        w={800}
        pl={"50px"}
        as={"h3"}
        size={"md"}
        fontWeight={subHeadingWeight}
        color={color}
      >
        About Me
      </Heading>
      <Text w={730} pl={"50px"} mb={"20px"}>
        Motivated software developer with a strong desire to excel in a
        fast-paced environment, focusing on innovative problem-solving.
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
