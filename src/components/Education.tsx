import {
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SkillList from "./SkillList";

export interface Education {
  school: string;
  years?: string;
  program?: string;
  location?: string;
  skills: string[];
}

interface ExperienceProps {
  education: Education[];
  color: string;
}

const Experience = ({ education, color }: ExperienceProps) => {
  return (
    <Grid
      justifyContent={"center"}
      gap={20}
      templateAreas={`"title details"`}
      py={"60px"}
      pr={"380px"}
    >
      <GridItem area={"title"}>
        <Heading
          variant="underline"
          color={useColorModeValue("orange.400", "orange.300")}
        >
          Education
        </Heading>
      </GridItem>
      <GridItem area={"details"} my={"40px"}>
        {education.map((item) => (
          <>
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
          </>
        ))}
      </GridItem>
    </Grid>
  );
};

export default Experience;
