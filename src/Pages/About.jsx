import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <Box id="about" className="about section" textAlign={"center"} mt="100px">
      <Heading>About</Heading>
      <br />
      <Box textAlign={"center"} width={"60%"} m="auto" alignItems={"center"}>
        <Text id="user-detail-intro" fontSize={"20px"}>
          An enthusiastic Full Stack Web Developer specialised in MERN stack
          from Masai School. Having the knowledge to write web application pages
          using React, Chakra UI, Redux, Node JS etc. Looking for a job
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
          src="https://streak-stats.demolab.com/?username=govindpullagura"
        />

        <GitHubCalendar
          className="react-activity-calendar"
          style={{ margin: "20px auto" }}
          username="GovindPullagura"
          color="rgb(251,141,5)"
          // hideColorLegend={true}
          blockSize={16}
          blockMargin={6}
          blockRadius="20"
        />
      </Flex>
    </Box>
  );
};

export default About;
