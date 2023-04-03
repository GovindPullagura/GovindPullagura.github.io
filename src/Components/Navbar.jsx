import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  MenuDivider,
  useDisclosure,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import resume from "../downloads/Govind_Pullagura.pdf";
import { TbDownload } from "react-icons/tb";

// const Links = [
//   { title: "Home", class: "nav-link home" },
//   { title: "About", class: "nav-link about" },
//   { title: "Skills", class: "nav-link skills" },
//   { title: "Projects", class: "nav-link projects" },
//   { title: "Contact", class: "nav-link contact" },
// ];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bgColor: "rgb(1,11,23)",
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Fy-6_JMo3INGG1ygBa3cgtjyxWNymHT9/view?usp=share_link"
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
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
        px={4}
      >
        <Flex
          //   h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            bgColor="rgb(1,31,43)"
            _hover={{ bgColor: "rgb(1,11,23)" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            w="95%"
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box w={{ base: "100%", md: "20%" }}>
              <Heading fontSize={"20px"} id="user-detail-name">
                Govind Pullagura
              </Heading>
            </Box>
            <Spacer />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
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
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} w="60%" display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
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
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
