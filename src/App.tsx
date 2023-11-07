import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./components/navBar/Header";
import About from "./components/About";
import WorkList from "./components/WorkList";
import Experience from "./components/Education";
import SkillLevel from "./components/SkillLevel";
import { educationList, skillLevelArr, projects } from "./data/lists";
import ProjectCard from "./components/ProjectCard";
import { LiaIdCard } from "react-icons/lia";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { scroll } from "framer-motion";
import { useState } from "react";

function App() {
  const [iconColor, setIconColor] = useState("");
  const bg = useColorModeValue("gray.200", "gray.600");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem area={"header"} id="header">
        <Header />
      </GridItem>
      <GridItem area={"main"} bg={bg} alignContent={"center"}>
        <VStack borderBottom={"solid"} borderBottomWidth={1}>
          <About color={subHeadingColor} />
          <Experience education={educationList} color={subHeadingColor} />
          <Heading
            mr={"600px"}
            mb={"40px"}
            pr={"252px"}
            color={useColorModeValue("orange.400", "orange.300")}
            id="skills"
            as={"h2"}
          >
            Skill Knowledge
          </Heading>
          <SkillLevel
            skillLevelArr={skillLevelArr}
            barColor={subHeadingColor}
          />
          <Heading size={"lg"}>Worked With</Heading>
          <WorkList />
          <Heading
            id="portfolio"
            mr={"600px"}
            mb={"20px"}
            pr={"380px"}
            color={useColorModeValue("orange.400", "orange.300")}
            as={"h2"}
          >
            Portfolio
          </Heading>
          <ProjectCard
            projects={projects}
            weight={500}
            color={subHeadingColor}
          />
        </VStack>
      </GridItem>
      <GridItem area={"footer"}>
        <HStack w={"100%"} justify={"center"}>
          <Button
            as={BsArrowUpCircleFill}
            boxSize={"40px"}
            mt={"10px"}
            color={iconColor}
            variant={"link"}
            onClick={() => console.log("clicked")}
          />
        </HStack>
        <HStack justify={"space-around"}>
          <HStack>
            <Text fontWeight={600} fontSize={"2xl"}>
              Contact
            </Text>
            <Icon
              as={LiaIdCard}
              boxSize={"30px"}
              pt={1}
              color={useColorModeValue("gray.800", "white")}
            />
          </HStack>
          <VStack></VStack>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;
