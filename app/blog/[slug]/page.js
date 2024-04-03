import Link from 'next/link';

const API_URL = process.env.API_URL;

export const generateMetadata = ({ params }) => {
    return {
        title: `Blog: ${params.slug}`
    };
}

async function getBlogDetails(id) {
    const response = await fetch(`${API_URL}/blog/${id}`, {
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