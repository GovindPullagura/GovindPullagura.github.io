import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Box id="skills" mt="100px">
      <Heading>Skills</Heading>
      <Box mt="30px">
        <Heading textDecoration={"underline"} fontSize={"30px"}>
          Tech Stacks
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
          w="80%"
          m="auto"
          mt="30px"
          gap={"20px"}
        >
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/143/143655.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              HTML
            </Text>
          </GridItem>
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/javascript.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              JavaScript
            </Text>
          </GridItem>
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              CSS
            </Text>
          </GridItem>
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              React
            </Text>
          </GridItem>
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/redux.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Redux
            </Text>
          </GridItem>
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/chakra-ui.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Chakra UI
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/data-structures-and-algorithms-5530325-4619143.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              DSA
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/fluency/2x/node-js.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Node Js
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              MongoDB
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-5379348-4492470.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Express Js
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box mt="30px">
        <Heading textDecoration={"underline"} fontSize={"30px"}>
          Other Skills
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
          w="80%"
          m="auto"
          mt="30px"
          gap={"20px"}
        >
          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/teamwork-2075509-1751782.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Teamwork
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/adaptable-3383780-2812133.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Adaptable
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/communication-742-875307.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Communication
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/time-management-70-766907.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Time Management
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/free/png-256/github-159-721954.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Github
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
