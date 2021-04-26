import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import DecorationBar from "./components/DecorationBar";
import ThoughtBox from "./components/ThoughtBox";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <DecorationBar />
      <ThoughtBox />
    </Box>
  </ChakraProvider>
);
