import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      div: {
        "&[aria-label='widget-component']": {
          "&:hover": {
            outlineWidth: 1,
            outlineStyle: "solid",
            outlineColor: "blue.500",
            outlineOffset: 2
          },
          "&[aria-selected='true']": {
            outlineWidth: 1,
            outlineStyle: "solid",
            outlineColor: "blue.500",
            outlineOffset: 2
          }
        }
      }
    }
  }
});
