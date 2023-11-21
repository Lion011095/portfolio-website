import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Header from "./components/navBar/Header";
import About from "./components/About";
import WorkList from "./components/listComponents/WorkList";
import Experience from "./components/listComponents/EducationList";
import SkillLevel from "./components/SkillLevel";
import {
  educationList,
  skillLevelArr,
  projects,
  contactList,
} from "./data/lists";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { LiaIdCard } from "react-icons/lia";
import { BsArrowUpCircleFill } from "react-icons/bs";
import ContactIcons from "./components/ContactIcons";
import PageProgressBar from "./components/navBar/PageProgressBar";
import MainTitle from "./components/MainTitle";
import SectionTitle from "./components/SectionTitle";

function App() {
  const bg = useColorModeValue("gray.200", "gray.600");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Grid templateAreas={`"header" "main" "contact" "footer"`}>
      <GridItem area={"header"} pos={"fixed"} zIndex={1} w={"100%"}>
        <Header />
        <PageProgressBar />
      </GridItem>
      <GridItem area={"main"} bg={bg}>
        <VStack borderBottom={"solid"} borderBottomWidth={1}>
          <MainTitle />
          <About color={subHeadingColor} />
          <SectionTitle id="education" title="Education" />
          <Experience education={educationList} color={subHeadingColor} />
          <SectionTitle id="skills" title="Skill Knowledge" />
          <SkillLevel
            skillLevelArr={skillLevelArr}
            barColor={subHeadingColor}
          />
          <Heading size={"lg"}>Worked With</Heading>
          <WorkList />
          <SectionTitle id="portfolio" title="Portfolio" />
          <ProjectCard
            projects={projects}
            weight={500}
            color={subHeadingColor}
          />
        </VStack>
      </GridItem>
      <GridItem area={"contact"}>
        <HStack w={"100%"} justify={"center"}>
          <Icon
            as={BsArrowUpCircleFill}
            boxSize={"40px"}
            mt={"10px"}
            variant={"link"}
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
            cursor={"pointer"}
            _hover={{ color: useColorModeValue("gray.400", "gray.300") }}
          />
        </HStack>
        <HStack justify={"space-between"}>
          <HStack>
            <Text
              ml={{ base: "20px", md: "100px", lg: "350px" }}
              fontWeight={600}
              fontSize={"2xl"}
              id="contact"
            >
              Contact
            </Text>
            <Icon
              as={LiaIdCard}
              boxSize={"30px"}
              pt={1}
              color={useColorModeValue("gray.800", "white")}
            />
          </HStack>
        </HStack>
        <HStack justify={"center"} mb={10}>
          <VStack>
            <ContactIcons contacts={contactList} />
            <Text px={"10px"} textAlign={"center"}>
              You can{" "}
              <Link
                color={subHeadingColor}
                href="mailto:lyakubov.development@gamil.com"
              >
                Email
              </Link>{" "}
              me or send me a messege on{" "}
              <Link
                color={subHeadingColor}
                href="https://www.linkedin.com/in/lionyakubov/"
              >
                LinkedIn
              </Link>
            </Text>
          </VStack>
        </HStack>
      </GridItem>
      <GridItem area={"footer"}>
        <HStack
          bg={useColorModeValue("orange.400", "blackAlpha.700")}
          w={"100%"}
          justify={"center"}
          py={10}
        >
          <Text>L Y A K U B O V - D E V E L O P M E N T</Text>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;
