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
    &[aria-label='widget-component'] {
      &:hover {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #63b3ed;
        outline-offset: 2px;
      }

      &[aria-selected="true"] {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #63b3ed;
        outline-offset: 2px;
      }
    }
  `;

  return (
    <Widget
      aria-label="widget-component"
      //  aria-selected="true"
      {...rest}>
      {children}
    </Widget>
  );
});
