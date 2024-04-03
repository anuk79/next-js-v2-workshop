import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.description}>
      <h2>Hello and welcome!!!</h2>
      <Link href="/blog">blog</Link>
      
    </section>
  );
}
