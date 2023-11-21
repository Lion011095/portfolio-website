import { Box, Heading, Text } from "@chakra-ui/react";
import SkillList from "./SkillList";

export interface Education {
  school: string;
  years?: string;
  program?: string;
  location?: string;
  skills: string[];
}

interface EducationProps {
  education: Education[];
  color: string;
}

const Experience = ({ education, color }: EducationProps) => {
  return (
    <>
      {education.map((item) => (
        <Box key={education.indexOf(item)} mx="20px">
          <Heading as={"h3"} size={"lg"} color={color}>
            {item.school}
          </Heading>
          <Text fontWeight={600}>{item.program}</Text>
          <Text>{item.years}</Text>
          <Text mb={"10px"}>{item.location}</Text>
          <SkillList
            skillList={item.skills}
            skillTitle="Skills Learned:"
            weight={500}
            color={color}
          />
        </Box>
      ))}
    </>
  );
};

export default Experience;
