import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { BiText } from "react-icons/bi";
import { BsCursorFill, BsFillGridFill } from "react-icons/bs";
import { MdAdsClick } from "react-icons/md";

import { Brand } from "@/components";

import { ToolButton } from "./ToolButton";

export const Toolbar = React.memo(function Toolbar() {
  return (
    <Flex
      direction="column"
      width="3rem"
      gap={1}
      flexShrink={0}
      backgroundColor="white"
      borderRight="1px"
      borderRightColor="gray.200">
      <Brand />
      <Flex direction="column" width="3rem" gap={2} padding="0.5rem">
        <ToolButton aria-label="Cursor" icon={<BsCursorFill size={16} />} active />
        <Divider />
        <ToolButton aria-label="Container" icon={<BsFillGridFill />} />
        <ToolButton aria-label="Text" icon={<BiText size={18} />} />
        <ToolButton aria-label="Button" icon={<MdAdsClick size={18} />} />
      </Flex>
    </Flex>
  );
});
