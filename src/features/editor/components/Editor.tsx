import React from "react";

import { WidgetComponent } from "@/features/widgets";

import { EditorLayout } from "./Layout";

export const Editor = React.memo(function Editor() {
  return (
    <EditorLayout>
      <WidgetComponent
        id="article1"
        tag="article"
        style={{
          backgroundColor: "white",
          height: 50,
          width: 100
        }}
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
    </EditorLayout>
  );
});
