import React from 'react'

export async function getStaticProps({ params }) {
    const { slug } = params;

    // Llamar a la API para obtener los datos del post
    const res = await fetch(`/api/getPost/${slug}`);
    const post = await res.json();

    return {
        props: {
        post, // Pasar el post como prop al componente
        },
        revalidate: 10, // ISR: Regenera cada 10 segundos
    };
}

export const PostPage = ({post}) => {
    console.log(post)
  return (
    <div>PostPage</div>
  )
}
