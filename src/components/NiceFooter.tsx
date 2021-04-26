import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Spacer, Text } from "@chakra-ui/layout";
import { background, Flex } from "@chakra-ui/react";
import React from "react";

const NiceFooter = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={useColorModeValue("#bd4867", "#0099ff")}
          fill-opacity="1"
          d="M0,192L26.7,208C53.3,224,107,256,160,266.7C213.3,277,267,267,320,240C373.3,213,427,171,480,160C533.3,149,587,171,640,165.3C693.3,160,747,128,800,149.3C853.3,171,907,245,960,256C1013.3,267,1067,213,1120,197.3C1173.3,181,1227,203,1280,218.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <Flex bg={useColorModeValue("#bd4867", "#0099ff")}>
        <Box
          p="3"
          mx="8"
          my="20"
          borderRadius="10"
          w="30vw"
          bg={useColorModeValue("rgba(255,255,255,0.25)", "blackAlpha.500")}
        >
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              Contact
            </Text>
          </Center>
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              About
            </Text>
          </Center>
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              Terms of use
            </Text>
          </Center>
        </Box>
        <Spacer />
        <Box
          p="3"
          mx="8"
          my="20"
          borderRadius="10"
          w="60vw"
          bg={useColorModeValue("rgba(255,255,255,0.25)", "blackAlpha.500")}
        >
          {" "}
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              Contact
            </Text>
          </Center>
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              About
            </Text>
          </Center>
          <Center>
            <Text
              color="white"
              fontSize="3xl"
              borderRadius="8"
              p="3"
              w="99%"
              _hover={{
                background: useColorModeValue(
                  "blackAlpha.800",
                  "rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              Terms of use
            </Text>
          </Center>
        </Box>
      </Flex>
    </div>
  );
};

export default NiceFooter;
