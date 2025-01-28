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
      <main className="min-h-screen">
        {/* Banner de Introducción */}
        <section className="intro h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-6">Bienvenido a mi Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explora los últimos artículos, tutoriales y temas destacados sobre [tema del blog].
          </p>
        </section>

        {/* Lista de Posts Destacados */}
        <section className="highlighted-posts py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Posts Destacados</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <li
                  key={post}
                  className={`p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                    index === 0 ? "md:col-span-2 lg:col-span-3 bg-white" : "bg-white"
                  }`}
                >
                  <Link href={`/post/${post}`}>
                    <h3 className="text-2xl font-semibold mb-2">{post}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}