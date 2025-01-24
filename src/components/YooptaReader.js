'use client'
import React, { useMemo, useState } from "react";
import NextImage from 'next/image';
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { markdown } from '@yoopta/exports';

export const YooptaReader = ({content}) => {
    const editor = useMemo(() => createYooptaEditor(), []);
    const [value, setValue] = useState();
    const [htmlValue, setHtmlValue] = useState('');
    editor.setEditorValue(value);

    // from content to @yoopta content
    const deserializeContent = () => {
        if (!content) return null;
        const markdownString = content;
        const deserializedContent = markdown.deserialize(editor, markdownString);
    
        editor.setEditorValue(deserializedContent);
    };
    deserializeContent();

    const onChange = (value) => {
        setValue(value);  
    };
  return (
    <div>
        <YooptaEditor
            style={{ width: "100%"}}
            editor={editor}
            plugins={[]}
            placeholder="Type something"
            value={value}
            onChange={onChange}
            autoFocus
            readOnly
        />
        {/* <div dangerouslySetInnerHTML={{ __html: markdown.deserialize(editor, content) }} /> */}
    </div>
  )
}
