import Image from "next/image";
import Link from "next/link";

async function getHighlightedPosts() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPosts`, {
    // next: { revalidate: 600 }, // Revalidación cada 10 minutos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function HomePage() {
  const posts = await getHighlightedPosts();
  console.log(posts);

  return (
    <>
      <main>
        {/* Introducción */}
        <section className="intro">
          <h1>Bienvenido a mi Blog</h1>
          <p>
            Explora los últimos artículos, tutoriales y temas destacados sobre
            [tema del blog].
          </p>
        </section>

        {/* Lista de Posts Destacados */}
        <section className="highlighted-posts p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Posts Destacados</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="p-4 border rounded-md shadow-md">
                <Link href={`/post/${post}`}>
                  <h3 className="text-lg font-semibold">{post}</h3>
                  <p className="text-gray-700">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <Link href="/admin/login" className="hover:text-blue-200">Login</Link>
    </>
  );
}
