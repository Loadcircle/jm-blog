import Link from "next/link";
const posts = [
    { id: 1, title: "Introducción a Next.js", status: "Publicado", date: "2023-10-01" },
    { id: 2, title: "Tailwind CSS Tips", status: "Borrador", date: "2023-10-05" },
  ];

  const comments = [
    { id: 1, post: "Introducción a Next.js", author: "Juan Pérez", date: "2023-10-02", status: "Aprobado" },
    { id: 2, post: "Tailwind CSS Tips", author: "Ana Gómez", date: "2023-10-06", status: "Pendiente" },
  ];
export const DashboardPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 pt-[80px]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>📝</span>
                <span>Posts</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>💬</span>
                <span>Comentarios</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>⚙️</span>
                <span>Configuración</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Bienvenido, Admin</h1>
          <Link href="/admin/create-post" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Crear Nuevo Post
          </Link>
        </header>

        {/* Resumen General */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Posts Publicados</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Posts en Borrador</h3>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Comentarios Pendientes</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
        </section>

        {/* Espacio para Gráficos (Futura Implementación) */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Gráficos</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
            Espacio para gráficos
          </div>
        </section>

        {/* Lista de Posts Recientes */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Posts Recientes</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Título</th>
                <th className="text-left py-2">Estado</th>
                <th className="text-left py-2">Fecha</th>
                <th className="text-left py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{post.title}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        post.status === "Publicado"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3">{post.date}</td>
                  <td className="py-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Editar</button>
                    <button className="text-red-600 hover:text-red-800">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Lista de Comentarios Recientes */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Comentarios Recientes</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Post</th>
                <th className="text-left py-2">Autor</th>
                <th className="text-left py-2">Fecha</th>
                <th className="text-left py-2">Estado</th>
                <th className="text-left py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{comment.post}</td>
                  <td className="py-3">{comment.author}</td>
                  <td className="py-3">{comment.date}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        comment.status === "Aprobado"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {comment.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Aprobar</button>
                    <button className="text-red-600 hover:text-red-800">Rechazar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};