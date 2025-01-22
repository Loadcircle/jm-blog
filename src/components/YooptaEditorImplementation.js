'use client'
import React, { useMemo, useState } from "react";
import NextImage from 'next/image';
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
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import { html, markdown } from '@yoopta/exports';
import { uploadToCloudinary } from "@/helpers/helpers";

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
  LinkTool: {
    tool: LinkTool,
    render: DefaultLinkToolRender,
  },
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
    Image.extend({
      renders: {
        image: (props) => {
          const { children, element, attributes } = props;
          
          return (
            // [NOTE] passing attributes is required
            <div {...attributes}>
              <NextImage
                src={element.props.src}
                alt={element.props.alt ? element.props.alt : "Default alt"}
                width={element.props.sizes.width}
                height={element.props.sizes.height}
              />
              {/* [NOTE] passing children is required */}
              {children}
            </div>
          );
        }
      },
      options: {
        onUpload: async (file) => {
          const data = await uploadToCloudinary(file, 'image');
          return {
            src: data.secure_url,
            sizes: {
              width: data.width,
              height: data.height,
            },
          };
        },
      }
    })
  ];
  
export const YooptaEditorImplementation = () => {
    const editor = useMemo(() => createYooptaEditor(), []);
    const [value, setValue] = useState();
    const [markdownTestValue, setMarkdownTestValue] = useState();
    const [htmlTestValue, seHtmlTestValue] = useState();

      // from content to @yoopta content
    const deserializeContent = () => {
      const markdownString = markdownTestValue;
      const htmlString = htmlTestValue;
      const valueMarkdown = markdown.deserialize(editor, markdownString);
      const valueHtml = html.deserialize(editor, htmlString);

      console.log(valueMarkdown);
      console.log(valueHtml);
      // editor.setEditorValue(value);
    };

    // from @yoopta content to content
    const serializeContent = () => {
      const data = editor.getEditorValue();
      const markdownString = markdown.serialize(editor, data);
      const htmlString = html.serialize(editor, data);
      console.log('markdown string', markdownString);
      setMarkdownTestValue(markdownString)
      console.log('html string', htmlString);
      seHtmlTestValue(markdownString)
    };
  
    const onChange = (value) => {
          setValue(value);
    };
    return (
      <>
        <YooptaEditor
            style={{ width: "100%"}}
            editor={editor}
            plugins={PLUGINS}
            tools={TOOLS}
            marks={MARKS}
            placeholder="Type something"
            value={value}
            onChange={onChange}
        />
        <button onClick={serializeContent}>Serialize</button>
        <button onClick={deserializeContent}>Deserialize</button>
      </>
    )
}
