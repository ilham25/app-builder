import { CSSObject } from "@emotion/react";
import React from "react";

export type Widget = React.PropsWithChildren & {
  id: string;
  style: CSSObject;
  tag: keyof JSX.IntrinsicElements;
};
