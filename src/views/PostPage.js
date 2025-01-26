import { YooptaReader } from '@/components/YooptaReader';
import Link from 'next/link';
import React from 'react'

export const PostPage = async ({ params }) => {
  const {slug} = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPost/${slug}`, {
    // next: { revalidate: 60 }, // ISR: Regenera cada 60 segundos
  });

  const post = await res.json();

  console.log(post);


  return (
      <div>
        <YooptaReader content={post.content}/>
        <Link href={`/admin/edit-post/${slug}`}>Editar</Link>
      </div>
  );
};