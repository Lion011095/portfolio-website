import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import ToolIconList from "../listComponents/ToolIconList";
import ProjectFeatureList from "./ProjectFeatureList";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: string;
  tools: string[];
  features: string[];
  link: string;
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
          key={projects.indexOf(project)}
          mx={"20px"}
        >
          <CardBody>
            <Image src={project.image} borderRadius={"7px"} mb={"10px"} />
            <HStack justifyContent={"space-between"} mb={"10px"}>
              <Heading
                as={"h3"}
                size={{ base: "sm", lg: "lg" }}
                ml={{ base: "10px", lg: "20px" }}
              >
                {project.link ? (
                  <Link href={project.link} isExternal>
                    {project.name}
                    <Icon
                      as={FaExternalLinkAlt}
                      boxSize={{ base: "15px", lg: "20px" }}
                      mx={2}
                      color={useColorModeValue("gray.600", "gray.300")}
                    />
                  </Link>
                ) : (
                  project.name
                )}
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
