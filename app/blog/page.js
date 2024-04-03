import Link from 'next/link';

export default function Blogs() {
    const slug="hello-world";

    return (
        <section class="blog">
          <h2>All Blogs</h2>
          <Link href={`/blog/${slug}`}>{slug}</Link>
          <Link href="/">Home</Link>
        </section>
    );
  }