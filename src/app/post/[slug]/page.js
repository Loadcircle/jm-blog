import { PostPage as Page } from '@/views/PostPage';

export async function generateStaticParams() {  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPosts`);
    const posts = await res.json();
   
    return posts.map((slug) => ({
      slug,
    }))
}

export default Page;