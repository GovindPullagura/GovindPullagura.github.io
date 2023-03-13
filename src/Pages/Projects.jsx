import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
import React from "react";
import fsHome from "../downloads/fatsecret.gpg.png";
import gcHome from "../downloads/gcmall.png";

const Projects = () => {
  return (
    <Box id="projects" w="80%" m="auto" mt={"100px"}>
      <Heading>Projects</Heading>
      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image h={{ base: "200px", md: "300px" }} src={fsHome} />
            <Box>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                FatSecret clone
              </Heading>
              <Text className="project-description" fontSize={"20px"}>
                FatSecret is a website that allows its users to track their
                nutrition, exercise and weight. It also provides information
                about various foods and recipes for hundreds of dishes to guide
                its users in their fitness journey.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={"22px"}>
                  Tech Stack:
                </Heading>
                <Text>HTML, CSS, JavaScript</Text>
              </Box>
              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://soft-gumption-f97d63.netlify.app"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                    mr="25px"
                  >
                    Demo
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/GovindPullagura/selfish-skin-4499"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                  >
                    Github
                  </Button>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Patym Mall */}

      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image h={{ base: "200px", md: "310px" }} src={gcHome} />
            <Box justifyContent={"center"} alignItems={"center"}>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                Paytm Mall clone
              </Heading>
              <Text className="project-description" fontSize={"20px"}>
                Paytm Mall is an Indian e-commerce website for fashion,
                electronics, home decor, stationery and groceries. Gift vouchers
                for various brands are also available here.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={"22px"}>
                  Tech Stack:
                </Heading>
                <Text>HTML, JavaScript, React, Chakra UI</Text>
              </Box>

              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://gc-mall.netlify.app/"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                    mr="25px"
                  >
                    Demo
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/GovindPullagura/wandering-cactus-2429/tree/main/gc-mall"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                  >
                    Github
                  </Button>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image h={{ base: "200px", md: "300px" }} src={fsHome} />
            <Box>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                FatSecret clone
              </Heading>
              <Text className="project-description" fontSize={"20px"}>
                FatSecret is a website that allows its users to track their
                nutrition, exercise and weight. It also provides information
                about various foods and recipes for hundreds of dishes to guide
                its users in their fitness journey.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={"22px"}>
                  Tech Stack:
                </Heading>
                <Text>HTML, CSS, JavaScript</Text>
              </Box>
              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://soft-gumption-f97d63.netlify.app"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                    mr="25px"
                  >
                    Demo
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/GovindPullagura/selfish-skin-4499"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                  >
                    Github
                  </Button>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Patym Mall */}

      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image h={{ base: "200px", md: "310px" }} src={gcHome} />
            <Box justifyContent={"center"} alignItems={"center"}>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                Paytm Mall clone
              </Heading>
              <Text className="project-description" fontSize={"20px"}>
                Paytm Mall is an Indian e-commerce website for fashion,
                electronics, home decor, stationery and groceries. Gift vouchers
                for various brands are also available here.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={"22px"}>
                  Tech Stack:
                </Heading>
                <Text>HTML, JavaScript, React, Chakra UI</Text>
              </Box>

              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://gc-mall.netlify.app/"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                    mr="25px"
                  >
                    Demo
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/GovindPullagura/wandering-cactus-2429/tree/main/gc-mall"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"rgb(7,113,156)"}
                    _hover={{ bgColor: "rgb(7,103,136)" }}
                  >
                    Github
                  </Button>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
