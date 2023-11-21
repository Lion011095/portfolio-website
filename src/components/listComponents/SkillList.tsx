import {
  Heading,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineRightCircle } from "react-icons/ai";

interface skillProps {
  skillList: string[];
  skillTitle: string;
  weight: number;
  color: string;
}

const SkillList = ({ skillList, skillTitle, weight, color }: skillProps) => {
  return (
    <>
      <Heading
        maxW={700}
        width={"100%"}
        as={"h4"}
        size={"sm"}
        fontWeight={weight}
        color={color}
      >
        {skillTitle}
      </Heading>
      <List maxW={730} px={{ lg: "50px" }} spacing={3} mb={"40px"} mx={"20px"}>
        {skillList.map((skill) => (
          <ListItem key={skill}>
            <ListIcon
              as={AiOutlineRightCircle}
              color={useColorModeValue("orange.400", "orange.300")}
            />
            {skill}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SkillList;
