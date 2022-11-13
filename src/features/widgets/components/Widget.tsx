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
