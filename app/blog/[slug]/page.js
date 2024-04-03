import Link from 'next/link';

export const generateMetadata = ({ params }) => {
    return {
        title: `Blog: ${params.slug}`
    };
}

async function getBlogDetails(id) {
    const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
        method: 'GET',
    });
    return response.json();
}

export default async function BlogPage({ params }) {
    const { blog } = await getBlogDetails(params.slug);
    // console.log(blog);

    return (
        <section>
          <h2>Blog: {blog.title}</h2>
          <p>{blog.body}</p>
          <Link href="/">Home</Link>
        </section>
    );
  }