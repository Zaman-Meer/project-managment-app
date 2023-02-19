import UsersPickerFilter from "@/components/common/UsersPickerFilter";
import IconButton from "@/components/common/IconButton";
import IdeaIcon from "../../../../public/icons/idea.svg";
import AddIcon from "../../../../public/icons/add.svg";
import { UserAvatarDataType } from "@/types";
import styles from "./headerLeft.module.css";

const userData: UserAvatarDataType[] = [
  {
    id: "1",
    imageUrl: "",
    numberOfTasks: 12,
  },
  {
    id: "2",
    imageUrl: "",
    numberOfTasks: 10,
  },
  {
    id: "3",
    imageUrl: "",
    numberOfTasks: 14,
  },
  {
    id: "4",
    imageUrl: "",
    numberOfTasks: 8,
  },
  {
    id: "5",
    imageUrl: "",
    numberOfTasks: 20,
  },
  {
    id: "6",
    imageUrl: "",
    numberOfTasks: 11,
  },
  {
    id: "1",
    imageUrl: "",
    numberOfTasks: 13,
  },
];

const HeaderLeft = () => {
  return (
    <div className={styles.headerLeftContainer}>
      <UsersPickerFilter users={userData} onSelect={() => {}} />
      <IconButton>
        <IdeaIcon />
      </IconButton>
      <IconButton bgColor="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default HeaderLeft;
