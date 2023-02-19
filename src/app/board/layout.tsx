import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import styles from "./layout.module.css";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.boardLayout}>
      <div className={styles.sidebarLayout}>
        <Sidebar />
      </div>
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
