import { Heading, useColorModeValue } from "@chakra-ui/react";

interface SectionTitleProps {
  title: string;
  id: string;
}

const SectionTitle = ({ title, id }: SectionTitleProps) => {
  return (
    <Heading
      pt={10}
      w={{ base: "95%", lg: "70%" }}
      float={"left"}
      color={useColorModeValue("orange.400", "orange.300")}
      id={id}
      as={"h2"}
      borderTop={"solid"}
      borderTopWidth={1}
      borderTopColor={useColorModeValue("blue.600", "blue.300")}
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;
