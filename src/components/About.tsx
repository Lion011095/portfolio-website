import {
  VStack,
  Image,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import name from "../assets/Lion glitch 800.gif";
import SkillList from "./SkillList";

interface AboutProps {
  color: string;
}

const softSkills = [
  "Analytical and technical approach to problem solving.",
  "Highly organized individual who excels in managing multiple projects and tasks simultaneously.",
  "Team player who takes initiative with strong communication skills who collaborates well with others.",
  "Extremely self-motivated and self-disciplined with good time managment kills assuring tasks are done on time.",
  "Strive to provide exceptional customer service.",
  "Willing to take on a variety of tasks.",
];

const techSkills = [
  "Proficient in HTML, JavaScript, CSS and other web development frameworks to create responsive web pages.",
  "Experience in creating secure sessions and forms using authentication and authorization methods",
  "Solid knowledge of NoSQL and SQL data bases such as Oracle and MongoDB for data managment and retrival.",
  "Excited to constently learn with new technologies and be pioneer in the tech industry.",
  "Experience with the design and implamentation of RESTful APIs.",
  "Proficient understanding in security and data validation.",
];

const About = ({ color }: AboutProps) => {
  const subHeadingWeight = 500;

  return (
    <VStack
      textAlign={"left"}
      pt={"60px"}
      borderBottom={"solid"}
      borderWidth={1}
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
