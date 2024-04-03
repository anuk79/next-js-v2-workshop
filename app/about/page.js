import Link from 'next/link';

export const metadata = {
    title: "About workshop",
  };

export default function About() {
    return (
        <section>
          <h2>About page</h2>
          <Link href="/">Home</Link>
        </section>
    );
  }