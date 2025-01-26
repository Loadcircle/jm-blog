'use client'
import React, { useMemo, useState } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { MARKS, PLUGINS, TOOLS } from "@/helpers/yooptaBuilders";


export const YooptaEditorImplementation = ({savePost, setTitle, isSaving}) => {
    const editor = useMemo(() => createYooptaEditor(), []);
    const [value, setValue] = useState();
    
    const savePostHandler = () => {
      const data = editor.getEditorValue();
      savePost(data);
    }
  
    const onChange = (value) => {
        setValue(value);  
        const currentTitle = document.querySelector(".yoopta-editor h1")?.textContent;
        setTitle(currentTitle);
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
        <button 
          disabled={isSaving} 
          onClick={savePostHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Save post
        </button>
      </>
    )
}
