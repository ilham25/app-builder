import { Box } from "@chakra-ui/react";
import React from "react";

import { WidgetComponent } from "@/features/widgets";

export const Editor = React.memo(function Editor() {
  return (
    <Box flexGrow="1" height="full" padding="2">
      <WidgetComponent
        id="id"
        tag="article"
        style={{ backgroundColor: "red", width: 100, height: 100 }}
      />
    </Box>
  );
});
