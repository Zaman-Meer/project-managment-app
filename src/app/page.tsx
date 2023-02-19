import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h5 className={styles.heading}>Welcome</h5>
      <div className={styles.container}>
        <Link href="/board">
          <div className={styles.card}>Board</div>
        </Link>
      </div>
    </main>
  );
}
