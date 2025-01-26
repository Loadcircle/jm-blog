'use client'
import { YooptaEditorImplementation } from "@/components/YooptaEditorImplementation";
import { stringToSlug } from "@/helpers/FEDHelpers";
import React, { useEffect, useState } from "react";
import { CreatePostPage } from "./CreatePostPage";


export const EditPostPage = ({ params }) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParams = async () => {
      setLoading(true);
      const {slug} = await params;

      if(!slug) return;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPost/${slug}`);
      const post = await res.json();
      
      //todo validate post
      if(post.content){
        setPost({
          title: slug,
          content: JSON.parse(post.content)
        })
      }
      setLoading(false);
    };

    fetchParams();
  }, []);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && <CreatePostPage post={post} />}
    </>
  )
}
