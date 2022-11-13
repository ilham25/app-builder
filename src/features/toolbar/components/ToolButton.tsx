import { IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";
import React from "react";

interface Props extends IconButtonProps {
  active?: boolean;
}

export const ToolButton = React.memo(function ToolButton({ active, ...rest }: Props) {
  return (
    <Tooltip label={rest["aria-label"]} placement="right" borderRadius={4}>
      <IconButton
        {...rest}
        size="sm"
        bgColor={!active ? "transparent" : undefined}
        color={!active ? "gray.400" : undefined}
      />
    </Tooltip>
  );
});
