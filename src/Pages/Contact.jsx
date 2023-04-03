import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import {
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Contact() {
  return (
    <Box id="contact" mt="100px" p="30px">
      <Heading>Contact</Heading>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Flex direction={"column"} m="auto" mt="20px" textAlign="center">
          <Flex alignItems={"center"}>
            <GoLocation />
            <Text ml="10px">Pulivendula, Andhra Pradesh</Text>
          </Flex>
          <Flex alignItems={"center"} mt="10px">
            <FiMail />
            <Text id="contact-email" ml="10px">
              govindpullagura@gmail.com
            </Text>
          </Flex>
          <Flex alignItems={"center"} mt="10px">
            <AiOutlinePhone />
            <Text id="contact-phone" ml="10px">
              +91 8220420929
            </Text>
          </Flex>
          <a
            id="contact-github"
            href="https://github.com/GovindPullagura"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              color="white"
              bgColor={"rgb(7,113,156)"}
              _hover={{ bgColor: "rgb(7,103,136)" }}
              mt="10px"
            >
              <AiOutlineGithub /> Github
            </Button>
          </a>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/govind-pullagura-106bb8263/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              mt="10px"
              color="white"
              bgColor={"rgb(7,113,156)"}
              _hover={{ bgColor: "rgb(7,103,136)" }}
            >
              <AiOutlineLinkedin /> LinkedIn
            </Button>
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
