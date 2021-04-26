import { Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const DecorationBar = () => {
  return (
    <Flex
      h="5em"
      w="100%"
      p="3"
      bg={useColorModeValue("#bd4867", "#0099ff")}
      borderBottomRadius="8"
      fixed
    >
      <Spacer />
      <Center>
        <Text fontFamily="Bangers" fontSize="5xl">
          Leave my mind!
        </Text>
      </Center>
      <Spacer />
      <Center>
        <ColorModeSwitcher />
      </Center>
    </Flex>
  );
};

export default DecorationBar;
