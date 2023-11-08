import { List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { workList } from "../../data/lists";

const WorkList = () => {
  return (
    <List
      pb={10}
      borderBottom={"solid"}
      borderBottomWidth={1}
      borderBottomColor={useColorModeValue("blue.600", "blue.300")}
      px={"190px"}
    >
      {workList.map((item) => (
        <ListItem mb={2} key={item}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default WorkList;
