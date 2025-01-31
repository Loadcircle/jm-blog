'use client'
import React, { useEffect, useMemo, useState } from "react";
import NextImage from 'next/image';
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { markdown } from '@yoopta/exports';
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

export const YooptaReader = ({content}) => {
    const yooptaContent = JSON.parse(content);
    const editor = useMemo(() => createYooptaEditor(), []);

  return (
    <div>
        <YooptaEditor
            style={{ width: "100%"}}
            editor={editor}
            plugins={PLUGINS}
            placeholder="Type something"
            value={yooptaContent}
            autoFocus
            readOnly
        />
        {/* <div dangerouslySetInnerHTML={{ __html: htmlValue }} /> */}
    </div>
  )
}
