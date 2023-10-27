import {
  Grid,
  GridItem,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./components/navBar/Header";
import About from "./components/About";
import WorkList from "./components/WorkList";
import Experience from "./components/Education";
import SkillLevel from "./components/SkillLevel";
import { educationList, skillLevelArr } from "./data/lists";

function App() {
  const bg = useColorModeValue("gray.200", "gray.600");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"} bg={bg}>
        <VStack>
          <About color={subHeadingColor} />
          <Experience education={educationList} color={subHeadingColor} />
          <Heading
            mr={"600px"}
            mb={"40px"}
            pr={"252px"}
            color={useColorModeValue("orange.400", "orange.300")}
            id="skills"
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
            mr={"600px"}
            mb={"40px"}
            pr={"380px"}
            color={useColorModeValue("orange.400", "orange.300")}
            id="skills"
          >
            Portfolio
          </Heading>
        </VStack>
      </GridItem>
      <GridItem area={"footer"} bg={"green.300"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
