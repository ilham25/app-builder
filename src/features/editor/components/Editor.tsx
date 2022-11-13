import { Box } from "@chakra-ui/react";
import React from "react";

import { WidgetComponent } from "@/features/widgets";

export const Editor = React.memo(function Editor() {
  return (
    <Box flexGrow="1" height="full" padding="2">
      <WidgetComponent
        id="article1"
        tag="article"
        style={{ backgroundColor: "white", width: 100, height: 100 }}
      />
      <WidgetComponent id="text1" tag="p">
        ini paragraf
      </WidgetComponent>
      <WidgetComponent
        id="button1"
        tag="button"
        style={{
          backgroundColor: "red",
          fontSize: 12,
          color: "white",
          paddingInline: 5,
          borderRadius: 4
        }}>
        ini tombol
      </WidgetComponent>
    </Box>
  );
});
