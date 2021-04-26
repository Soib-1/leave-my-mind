import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

const thoughts = [
  {
    id: 1,
    sentence: "I need to pay my billings",
    date: "2021/02/01",
    time: "09:26",
  },
  {
    id: 2,
    sentence: "Do something with my sleeplessness",
    date: "2021/02/02",
    time: "03:46",
  },
  {
    id: 3,
    sentence: "Remember about my memory problems",
    date: "2021/02/03",
    time: "11:11",
  },
  {
    id: 4,
    sentence: "Always smile!",
    date: "2021/02/01",
    time: "12:03",
  },
  {
    id: 5,
    sentence: "That day was wonderful!",
    date: "2021/02/04",
    time: "19:30",
  },
  {
    id: 1,
    sentence: "I need to pay my billings",
    date: "2021/02/01",
    time: "09:26",
  },
  {
    id: 2,
    sentence: "Do something with my sleeplessness",
    date: "2021/02/02",
    time: "03:46",
  },
  {
    id: 3,
    sentence: "Remember about my memory problems",
    date: "2021/02/03",
    time: "11:11",
  },
  {
    id: 4,
    sentence: "Always smile!",
    date: "2021/02/01",
    time: "12:03",
  },
  {
    id: 5,
    sentence: "That day was wonderful!",
    date: "2021/02/04",
    time: "19:30",
  },
  {
    id: 1,
    sentence: "I need to pay my billings",
    date: "2021/02/01",
    time: "09:26",
  },
  {
    id: 2,
    sentence: "Do something with my sleeplessness",
    date: "2021/02/02",
    time: "03:46",
  },
  {
    id: 3,
    sentence: "Remember about my memory problems",
    date: "2021/02/03",
    time: "11:11",
  },
  {
    id: 4,
    sentence: "Always smile!",
    date: "2021/02/01",
    time: "12:03",
  },
  {
    id: 5,
    sentence: "That day was wonderful!",
    date: "2021/02/04",
    time: "19:30",
  },
  {
    id: 1,
    sentence: "I need to pay my billings",
    date: "2021/02/01",
    time: "09:26",
  },
  {
    id: 2,
    sentence: "Do something with my sleeplessness",
    date: "2021/02/02",
    time: "03:46",
  },
  {
    id: 3,
    sentence: "Remember about my memory problems",
    date: "2021/02/03",
    time: "11:11",
  },
  {
    id: 4,
    sentence: "Always smile!",
    date: "2021/02/01",
    time: "12:03",
  },
  {
    id: 5,
    sentence: "That day was wonderful!",
    date: "2021/02/04",
    time: "19:30",
  },
];
interface ThoughtsConfig {
  id: number;
  sentence: string;
  date: string;
  time: string;
}

const Thought = ({ sentence, date, time }: ThoughtsConfig) => {
  return (
    <Center my="30">
      <Skeleton
        startColor={useColorModeValue("red.400", "blue.400")}
        endColor={useColorModeValue("red.500", "blue.500")}
        h="200px"
        w="30%"
        borderRadius="10"
        isLoaded={true}
      >
        <Box
          bg={useColorModeValue("white", "gray.700")}
          p="8"
          borderRadius="15"
          boxShadow="lg"
          h="200px"
        >
          <Text fontSize="3xl" fontWeight="bold">
            {sentence}
          </Text>
          <Text fontSize="md">{date}</Text>
          <Text fontSize="md">{time}</Text>
        </Box>
      </Skeleton>
    </Center>
  );
};

const ThoughtBox = () => {
  return (
    <Box m="50">
      {thoughts.map((props) => (
        <Thought {...props} />
      ))}
    </Box>
  );
};

export default ThoughtBox;
