import Link from 'next/link';

const API_URL = process.env.API_URL;

async function getBlogPosts() {
    const response = await fetch(`${API_URL}/blog`, {
        method: 'GET',
    });
    return response.json();
}

export default async function Blogs() {
    const blogPosts = await getBlogPosts();
    // console.log(blogPosts);

    return (
        <section className="blog">
          <h2>All Blogs</h2>
          {blogPosts.map(({ slug, title }) => <Link href={`/blog/${slug}`} key={slug}>{title}</Link>)}
          <Link href="/">Home</Link>
        </section>
    );
  }