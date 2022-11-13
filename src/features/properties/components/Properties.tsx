import { Flex } from "@chakra-ui/react";
import React from "react";

export const Properties = React.memo(function Properties() {
  return (
    <Flex
      direction="column"
      flexShrink="0"
      height="full"
      bgColor="white"
      w="15rem"
      borderLeft="1px"
      borderLeftColor="gray.200"></Flex>
  );
});
