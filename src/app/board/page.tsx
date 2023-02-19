import BoardWorkspace from "@/components/ui/BoardWorkspace";
import SubHeader from "@/components/ui/SubHeader";
import styles from "./board.module.css";

export default function Board() {
  return (
    <div className={styles.boardContainer}>
      <SubHeader />
      <BoardWorkspace />
    </div>
  );
}
