import Link from 'next/link';

export const generateMetadata = ({ params }) => {
    return {
        title: `Blog: ${params.slug}`
    };
}

export default function BlogPage({ params }) {
    return (
        <section>
          <h2>Blog: {params.slug}</h2>
          <Link href="/">Home</Link>
        </section>
    );
  }