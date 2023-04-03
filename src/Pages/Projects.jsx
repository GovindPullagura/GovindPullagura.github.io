import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
import React from "react";
import fsHome from "../downloads/fatsecret.gpg.png";
import gcHome from "../downloads/gcmall.png";
import indiHome from "../downloads/indishop.png";
import healthisticHome from "../downloads/healthistic.png";

const Projects = () => {
  return (
    <Box id="projects" w="80%" m="auto" mt={"100px"}>
      <Heading>Projects</Heading>

      {/* Fatsecret.com */}
      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image h={{ base: "200px", md: "300px" }} mb="20px" src={fsHome} />
            <Box>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={{ base: "20px", md: "25px" }}
              >
                FatSecret clone
              </Heading>
              <Text
                className="project-description"
                fontSize={{ base: "15px", md: "18px" }}
              >
                FatSecret is a website that allows its users to track their
                nutrition, exercise and weight. It also provides information
                about various foods and recipes for hundreds of dishes to guide
                its users in their fitness journey.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={{ base: "18px", md: "22px" }}>
                  Tech Stack:
                </Heading>
                <Text fontSize={{ base: "15px", md: "18px" }}>
                  HTML, CSS, JavaScript
                </Text>
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
            <Image h={{ base: "200px", md: "310px" }} mb="20px" src={gcHome} />
            <Box justifyContent={"center"} alignItems={"center"}>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                Paytm Mall clone
              </Heading>
              <Text
                className="project-description"
                fontSize={{ base: "15px", md: "18px" }}
              >
                Paytm Mall is an Indian e-commerce website for fashion,
                electronics, home decor, stationery and groceries. Gift vouchers
                for various brands are also available here.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={{ base: "18px", md: "22px" }}>
                  Tech Stack:
                </Heading>
                <Text fontSize={{ base: "15px", md: "18px" }}>
                  HTML, JavaScript, React, Chakra UI
                </Text>
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

      {/* Indishop.com */}
      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image
              h={{ base: "200px", md: "335px" }}
              mb="20px"
              src={indiHome}
            />
            <Box>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                Meesho.com clone
              </Heading>
              <Text
                className="project-description"
                fontSize={{ base: "15px", md: "18px" }}
              >
                Meesho.com is an e-commerce website that offers top-quality
                products at rock-bottom prices, allowing its users to shop to
                their heart's content without any budget restraints. At Meesho,
                an user have over 50 lakhs items to choose from including a wide
                range of apparel, cosmetics, household items, and many more
                categories.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={{ base: "18px", md: "22px" }}>
                  Tech Stack:
                </Heading>
                <Text fontSize={{ base: "15px", md: "18px" }}>
                  TypeScript, React, Redux, Chakra UI
                </Text>
              </Box>
              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://indi-shop.vercel.app/"
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
                  href="https://github.com/GovindPullagura/aware-carriage-7836"
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

      {/* Healthistic */}

      <Flex
        className="project-card"
        mt="50px"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex direction={{ base: "column", md: "column", lg: "row" }}>
            <Image
              h={{ base: "200px", md: "335px" }}
              mb="20px"
              src={healthisticHome}
            />
            <Box justifyContent={"center"} alignItems={"center"}>
              <Heading
                className="project-title"
                textDecoration={"underline"}
                fontSize={"25px"}
              >
                HealthKart.com clone
              </Heading>
              <Text
                className="project-description"
                fontSize={{ base: "15px", md: "18px" }}
              >
                HealthKart is a premium platform for health,nutrition and
                fitness products with millions of consumers in online and
                offline channels. Its vision is to help consumers achieve their
                health and fitness goals,be it general well being,weight loss or
                muscle building,by being an active partner in their fitness
                journey.
              </Text>
              <Box className="project-tech-stack">
                <Heading mt="30px" fontSize={{ base: "18px", md: "22px" }}>
                  Tech Stack:
                </Heading>
                <Text fontSize={{ base: "15px", md: "18px" }}>
                  HTML, JavaScript, React, Chakra UI, NodeJS, MongoDB, ExpressJS
                </Text>
              </Box>

              <Box mt="20px">
                <a
                  className="project-deployed-link"
                  href="https://frontend-snowy-eta.vercel.app/"
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
                  href="https://github.com/faisalinfinity/cuddly-smoke-9747"
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
