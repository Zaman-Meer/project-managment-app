import { useState } from "react";
import Cross from "../../../../public/icons/cross.svg";
import Add from "../../../../public/icons/add.svg";
import SelectInput from "../SelectInput";
import styles from "./addCard.module.css";

interface AddCardProps {
  projects: any[];
  onAdd: (title: string, projectId: string) => void;
}

const AddCard = ({ projects, onAdd }: AddCardProps) => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleClose = () => {
    setShowAddCard(false);
    setTitle("");
    setProjectId("");
  };

  const handleAdd = () => {
    if (title && projectId) {
      onAdd(title, projectId);
      handleClose();
    }
  };

  return (
    <>
      {showAddCard ? (
        <div className={styles.cardContainer}>
          <div className={styles.header}>
            <span className={styles.title}>Card Title</span>
            <span className={styles.close} onClick={handleClose}>
              <Cross />
            </span>
          </div>
          <textarea
            className={styles.titleInput}
            rows={3}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div className={styles.footer}>
            <SelectInput
              options={projects}
              value={projectId}
              onSelect={(event) => setProjectId(event.target.value)}
            />{" "}
            <button
              className={styles.addBtn}
              disabled={!title || !projectId}
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.addCardBtn} onClick={() => setShowAddCard(true)}>
          <Add /> Add Card
        </div>
      )}
    </>
  );
};

export default AddCard;
