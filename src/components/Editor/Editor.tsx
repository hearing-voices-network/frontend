import React, { FunctionComponent, useState } from "react";
import RichTextEditor from "react-rte";

import "./Editor.scss";

interface IProps {}

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "BLOCK_TYPE_DROPDOWN"
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "editor--button" },
    { label: "Italic", style: "ITALIC", className: "editor--button" }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading", style: "header-one" }
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item", className: "editor--button" }
  ]
};

const Editor: FunctionComponent<IProps> = () => {
  const [value, editValue] = useState(RichTextEditor.createEmptyValue());

  return (
    <RichTextEditor
      value={value}
      onChange={text => editValue(text)}
      // @ts-ignore
      toolbarConfig={toolbarConfig}
      toolbarClassName="editor--toolbar"
      editorClassName="editor--content"
    />
  );
};
export default Editor;
