import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";
import Header from "./components/navBar/Header";
import About from "./components/About";
import WorkList from "./components/listComponents/WorkList";
import Experience from "./components/Education";
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
import name from "./assets/Lion glitch 800.gif";
import ContactIcons from "./components/ContactIcons";

function App() {
  const bg = useColorModeValue("gray.200", "gray.600");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Grid templateAreas={`"header" "main" "contact" "footer"`}>
      <GridItem area={"header"} id="header" pos={"fixed"} zIndex={1} w={"100%"}>
        <Header />
      </GridItem>
      <GridItem area={"main"} bg={bg} alignContent={"center"}>
        <VStack borderBottom={"solid"} borderBottomWidth={1}>
          <Image src={name} borderBottom={"solid"} mt={20} />
          <Heading
            as={"h2"}
            size={"lg"}
            mb={10}
            color={useColorModeValue("orange.400", "orange.300")}
          >
            Full-Stack Developer
          </Heading>
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
            <Text ml={"350px"} fontWeight={600} fontSize={"2xl"} id="contact">
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
            <Text>
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
