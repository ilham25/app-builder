import { Box } from "@chakra-ui/react";
import React from "react";

export const EditorLayout = React.memo(function EditorLayout({
  children
}: React.PropsWithChildren) {
  return (
    <Box flexGrow="1" height="full" padding="2" overflow="auto">
      {children}
    </Box>
  );
});
