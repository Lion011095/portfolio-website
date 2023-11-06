import {
  Text,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

interface FeaturesProps {
  features: string[];
  weight: number;
  color: string;
}

const ProjectFeatureList = ({ features, weight, color }: FeaturesProps) => {
  return (
    <>
      <Text fontWeight={weight} color={color} ml={"35px"}>
        Features :
      </Text>
      <List maxW={730} px={"50px"} spacing={3} mb={"10px"}>
        {features.map((feature) => (
          <ListItem key={feature}>
            <ListIcon
              as={VscCheck}
              color={useColorModeValue("orange.400", "orange.300")}
            />
            {feature}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ProjectFeatureList;
