'use client'
import { YooptaEditorImplementation } from "@/components/YooptaEditorImplementation";
import { stringToSlug } from "@/helpers/FEDHelpers";
import React, { useMemo, useState } from "react";


export const CreatePostPage = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState(null);

  const savePost = async (data) => {
    setIsSaving(true);
    
    const request = await fetch('/api/admin/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName: stringToSlug(title),
        content: data,
      }),
    });

    if (!request.ok) {
      // Handle error
      console.error('Failed to save post');
    }

    const response = await request.json();

    console.log(response);

    setIsSaving(false);
  }
  return (
      <div className="md:py-[100px] md:pl-[200px] md:pr-[80px] px-[20px] pt-[80px] pb-[40px] flex justify-center flex-col items-center">
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Enter title"
            className="w-full p-2 border border-gray-300 rounded"
            value={stringToSlug(title)}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <YooptaEditorImplementation savePost={savePost} isSaving={isSaving} setTitle={setTitle}/>
      </div>
  )
}
