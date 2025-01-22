'use client'
import React, { useMemo, useState } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import Blockquote from '@yoopta/blockquote';
import Accordion from '@yoopta/accordion';
import Code from '@yoopta/code';
import Embed from '@yoopta/embed';
import Image from '@yoopta/image';
import File from '@yoopta/file';
import Link from '@yoopta/link';
import Table from '@yoopta/table';
import Divider from '@yoopta/divider';
import { HeadingOne, HeadingThree, HeadingTwo } from '@yoopta/headings';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

const TOOLS = {
  Toolbar: {
    tool: Toolbar,
    render: DefaultToolbarRender,
  },
  ActionMenu: {
    tool: ActionMenu,
    render: DefaultActionMenuRender,
  },
  // LinkTool: {
  //   tool: LinkTool,
  //   render: DefaultLinkToolRender,
  // },
};

const PLUGINS = [
    Paragraph,
    Blockquote,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Accordion,
    Code,
    Embed,
    Link,
    Table,
    Divider,
  ];
  
export const YooptaEditorImplementation = () => {
    const editor = useMemo(() => createYooptaEditor(), []);
    const [value, setValue] = useState();
  
    const onChange = (value) => {
          setValue(value);
    };
    return (
        <YooptaEditor
            editor={editor}
            plugins={PLUGINS}
            tools={TOOLS}
            marks={MARKS}
            placeholder="Type something"
            value={value}
            onChange={onChange}
        />
    )
}
