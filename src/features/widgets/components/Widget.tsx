import styled from "@emotion/styled";
import React from "react";

import type { Widget } from "../types";

export const WidgetComponent = React.memo(function WidgetComponent({
  tag,
  children,
  style,
  ...rest
}: Widget) {
  const Widget = styled(tag)`
    ${style}
    &:hover {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #63b3ed;
      outline-offset: 1px;
    }

    &[aria-selected="true"] {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #63b3ed;
      outline-offset: 1px;
    }
  `;

  return (
    <Widget
      // aria-selected="true"
      {...rest}>
      {children}
    </Widget>
  );
});
