import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "nav main" "footer footer"`,
      }}
      gap={1}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"nav"} bg={"pink.300"}>
          Nav
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"blue.300"}>
        Main
      </GridItem>
      <GridItem area={"footer"} bg={"green.300"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
