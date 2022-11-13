import { Flex } from "@chakra-ui/react";
import React from "react";

export const Layout = React.memo(function Layout({ children }: React.PropsWithChildren) {
  return (
    <Flex width="full" height="100vh" backgroundColor="gray.100">
      {children}
    </Flex>
  );
});
