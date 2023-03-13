import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import resume from "../downloads/Govind_Pullagura.pdf";
import { TbDownload } from "react-icons/tb";

const Navbar = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Fy-6_JMo3INGG1ygBa3cgtjyxWNymHT9/view?usp=share_link"
    );
  };
  return (
    <Flex
      direction={["column", "column", "row"]}
      // bgColor={"#B49D6F"}
      bgColor={"#00719c"}
      color="white"
      id="nav-menu"
      p="10px"
      alignItems={"center"}
      position="fixed"
      overflow="hidden"
      top="0"
      zIndex={"999"}
      w="100%"
    >
      <Box w="20%">
        <Heading fontSize={"20px"} id="user-detail-name">
          Govind Pullagura
        </Heading>
      </Box>
      <Spacer />
      <Box w="60%">
        <Flex direction={["column", "column", "row"]}>
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
            <Text className="nav-link home"> Home</Text>
          </Link>
          <Spacer />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link about"
          >
            About
          </Link>
          <Spacer />
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link skills"
          >
            Skills
          </Link>
          <Spacer />
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link projects"
          >
            Projects
          </Link>
          <Spacer />
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link contact"
          >
            Contact
          </Link>
          <Spacer />
          <a
            href={resume}
            className="nav-link resume"
            rel="noreferrer"
            target="_blank"
            download
          >
            <Button
              id="resume-button-1"
              h="30px"
              color="white"
              bgColor={"rgb(1,31,43)"}
              _hover={{ bgColor: "rgb(1,11,23)" }}
              onClick={handleClick}
            >
              <TbDownload /> Resume
            </Button>
          </a>
          <Spacer />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
