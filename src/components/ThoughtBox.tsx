import { useColorModeValue } from "@chakra-ui/color-mode";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

const ThoughtBox = () => {
  return (
    <div>
      <Skeleton
        startColor={useColorModeValue("red.400", "blue.400")}
        endColor={useColorModeValue("red.500", "blue.500")}
        h="200px"
        w="30%"
        borderRadius="10"
      >
        T
      </Skeleton>
    </div>
  );
};

export default ThoughtBox;
