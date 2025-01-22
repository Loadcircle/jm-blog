'use client'
import { YooptaEditorImplementation } from "@/components/YooptaEditorImplementation";
import React, { useMemo, useState } from "react";


export const CreatePostPage = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <div className="md:py-[100px] md:pl-[200px] md:pr-[80px] px-[20px] pt-[80px] pb-[40px] flex justify-center flex-col items-center">
            <YooptaEditorImplementation />
        </div>
    </>
  )
}
