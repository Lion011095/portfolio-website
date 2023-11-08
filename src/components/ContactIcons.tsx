import { HStack, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Contact {
  link: string;
  icon: IconType;
}

interface ContactIconsProps {
  contacts: Contact[];
}

const ContactIcons = ({ contacts }: ContactIconsProps) => {
  return (
    <HStack spacing={5}>
      {contacts.map((contact) => (
        <Link key={contact.link} href={contact.link} cursor={"pointer"}>
          <Icon as={contact.icon} boxSize={"25px"} />
        </Link>
      ))}
    </HStack>
  );
};

export default ContactIcons;
