import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Rendering</h1>
     <Link href="/counter">Counter</Link>
    </main>
  );
}
