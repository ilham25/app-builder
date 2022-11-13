import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { VscTools } from "react-icons/vsc";

export const Brand = React.memo(function Brand() {
  return (
    <Flex w="3rem" h="3rem" align="center" justify="center">
      <Icon as={VscTools} h={5} w={5} color="blue.400" />
    </Flex>
  );
});
