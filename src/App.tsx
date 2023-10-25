import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import About from "./components/About";
import Experience, { Education } from "./components/Education";

const educationList: Education[] = [
  {
    school: "Seneca College",
    years: "2021 - 2023",
    program: "Computer Programming",
    location: "Newnham Campus, Toronto, ON, Canada",
    skills: [
      "Computer programming",
      "Operating systems",
      "Database and web technology",
      "Data communication",
      "Security",
      "Advanced programming languages",
      "System methodologies",
      "Internet client and server-side development",
      "Database system design and maintenance",
      "Solve problems associated with software installation",
    ],
  },
  {
    school: "Self Education",
    years: "ongoing",
    program: "React, TypeScript, Node.js, Python, Security",
    location: "CodeWithMosh, YouTube, Udemy, TryHackMe",
    skills: [
      "Data transfer protocol",
      "Vulnarbilities and how to avoid them",
      "NoSQL Databases (MongoDB)",
      "React programming using functional components",
      "Chakra UI React component library",
      "Using TypeScript with React to ensure type safety",
      "Strenghthning my Knowledge with Node and Express",
    ],
  },
];

function App() {
  const bg = useColorModeValue("gray.200", "gray.600");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"} bg={bg}>
        <About color={subHeadingColor} />
        <Experience education={educationList} color={subHeadingColor} />
      </GridItem>
      <GridItem area={"footer"} bg={"green.300"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
