import { List, ListItem } from "@chakra-ui/react";
import { workList } from "../../data/lists";

const WorkList = () => {
  return (
    <List pb={10} mx={"20px"}>
      {workList.map((item) => (
        <ListItem mb={2} key={item}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default WorkList;
