import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import resume from "../downloads/Govind_Pullagura.pdf";
import { TbDownload } from "react-icons/tb";

const Home = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Fy-6_JMo3INGG1ygBa3cgtjyxWNymHT9/view?usp=share_link"
    );
  };
  return (
    <Box id="home" w="100%">
      <Flex direction={"column"}>
        <Box textAlign={"center"} mt="100px" mb="100px">
          <Heading>Govind Pullagura</Heading>
          <Text fontSize={"20px"}>Full Stack Web Developer</Text>
        </Box>
        <Box w="80%" m="auto">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            gap="30px"
          >
            <a
              href={resume}
              style={{ marginBottom: "0%" }}
              rel="noreferrer"
              target="_blank"
              download
            >
              <Button
                id="resume-button-2"
                h="50px"
                fontSize={"25px"}
                color="white"
                bgColor={"#00719c"}
                _hover={{ bgColor: "rgb(1,11,23)" }}
                onClick={handleClick}
              >
                <TbDownload /> Resume
              </Button>
            </a>
            <Spacer />
            <Image
              className="home-img"
              // ml="70%"
              // mr={"20px"}
              w="300px"
              height={"300px"}
              borderRadius="20px"
              src="https://media.licdn.com/dms/image/D4D03AQGVIKL6IB1SKQ/profile-displayphoto-shrink_400_400/0/1674819705383?e=1681344000&v=beta&t=ePwgRQPZUq3Z0LKiT6pShzljV1OjAuEH7uKC_5ABCdc"
              alt="Govind Pullagura"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
