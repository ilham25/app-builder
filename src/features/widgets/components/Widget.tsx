import styled from "@emotion/styled";
import { Enable, Resizable, ResizeCallback } from "re-resizable";
import React from "react";

import type { Widget } from "../types";

const resizeWrapperStyle: React.CSSProperties = {
  width: "10px"
};

export const WidgetComponent = React.memo(function WidgetComponent({
  tag,
  children,
  style,
  ...rest
}: Widget) {
  const ref = React.useRef<HTMLElement>();

  const [dimension, setDimension] = React.useState<{
    height: number | string;
    width: number | string;
  }>({
    height: (style?.height ?? "auto") as number | string,
    width: (style?.width ?? "auto") as number | string
  });

  const [isResizing, setIsResizing] = React.useState<boolean>(false);

  const Widget = styled(tag)`
    ${style}
    ${{ ...dimension }}
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

  const onResizeStart = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const onResizeStop: ResizeCallback = React.useCallback((event, direction, ref) => {
    const { clientHeight, clientWidth } = ref;

    setDimension({
      height: clientHeight,
      width: clientWidth
    });
    setIsResizing(false);
  }, []);

  React.useEffect(() => {
    if (!ref.current) return;
    const { clientHeight, clientWidth } = ref.current;
    setDimension({ height: clientHeight, width: clientWidth });
  }, [ref]);

  const enable: Enable = React.useMemo(() => {
    const isEnable = true;
    const axisArr: (keyof Enable)[] = [
      "bottom",
      "bottomLeft",
      "bottomRight",
      "left",
      "right",
      "top",
      "topLeft",
      "topRight"
    ];
    const axisObj: Enable = {};

    axisArr.forEach((axis) => {
      axisObj[axis] = isEnable;
    });

    return axisObj;
  }, []);

  return (
    <Resizable
      defaultSize={dimension}
      size={dimension}
      onResizeStop={onResizeStop}
      onResizeStart={onResizeStart}
      enable={enable}
      style={
        isResizing
          ? { outline: "1px solid #63b3ed", outlineOffset: "1px", ...resizeWrapperStyle }
          : resizeWrapperStyle
      }>
      <Widget
        // aria-selected="true"
        {...rest}
        ref={ref as React.Ref<HTMLElement>}>
        {children}
      </Widget>
    </Resizable>
  );
});
