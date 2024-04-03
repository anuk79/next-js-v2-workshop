import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.description}>
      <h2>Hello and welcome!!!</h2>
      <ul>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
      
    </section>
  );
}
