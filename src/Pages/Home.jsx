import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box id="home" w="100%">
      <Flex
        direction={"column"}
        // h={window.height}
        padding="50px"
        // alignItems="center"
      >
        <Box mt="100px" mb="100px" mr="50%">
          <Heading>Govind Pullagura</Heading>
          <Text fontSize={"20px"}>Full Stack Web Developer</Text>
        </Box>
        <Image
          ml="70%"
          // mr={"20px"}
          w="300px"
          height={"300px"}
          borderRadius="20px"
          src="https://media.licdn.com/dms/image/D4D03AQGVIKL6IB1SKQ/profile-displayphoto-shrink_400_400/0/1674819705383?e=1681344000&v=beta&t=ePwgRQPZUq3Z0LKiT6pShzljV1OjAuEH7uKC_5ABCdc"
          alt="Govind Pullagura"
        />
      </Flex>
    </Box>
  );
};

export default Home;
