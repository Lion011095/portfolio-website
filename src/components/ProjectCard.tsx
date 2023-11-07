import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import ToolIconList from "./ToolIconList";
import ProjectFeatureList from "./ProjectFeatureList";

interface Project {
  name: string;
  tools: string[];
  features: string[];
  image: string;
}

interface ProjectCardProps {
  projects: Project[];
  weight: number;
  color: string;
}

const ProjectCard = ({ projects, weight, color }: ProjectCardProps) => {
  return (
    <>
      {projects.map((project) => (
        <Card
          maxW={"4xl"}
          mb={"50px"}
          bgColor={useColorModeValue("gray.300", "gray.700")}
        >
          <CardBody>
            <Image src={project.image} borderRadius={"7px"} mb={"10px"} />
            <HStack justifyContent={"space-between"} mb={"10px"}>
              <Heading as={"h3"} size={"lg"} ml={"20px"}>
                {project.name}
              </Heading>
              <ToolIconList tools={project.tools} />
            </HStack>
            <ProjectFeatureList
              features={project.features}
              weight={weight}
              color={color}
            />
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
