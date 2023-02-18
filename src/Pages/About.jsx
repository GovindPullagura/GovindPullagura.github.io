import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box id="about" textAlign={"center"} mt="100px">
      <Heading>About</Heading>
      <br />
      <Box textAlign={"center"} width={"60%"} m="auto" alignItems={"center"}>
        <Text fontSize={"20px"}>
          An enthusiastic Full Stack Web Developer specialised in MERN stack
          from Masai School. Having the knowledge to write web application pages
          using both front-end and back-end coding languages. Looking for a job
          opportunity in a technology driven organisation that would enhance
          one's career and technical knowledge and to showcase one's skills.
        </Text>
      </Box>
      <br />
      <Flex direction={"column"} w="80%" m="auto">
        <Image
          h="195px"
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=govindpullagura"
        />
        <Image
          id="github-stats-card"
          h="195px"
          src="https://github-readme-stats.vercel.app/api?username=govindpullagura"
        />
        <Image
          id="github-streak-stats"
          h="195px"
          src="https://github-readme-streak-stats.herokuapp.com?user=GovindPullagura"
        />
      </Flex>
    </Box>
  );
};

export default About;
