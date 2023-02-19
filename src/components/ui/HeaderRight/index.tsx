import IconButton from "@/components/common/IconButton";
import Announcement from "../../../../public/icons/announcement.svg";
import Calender from "../../../../public/icons/calender.svg";
import Chat from "../../../../public/icons/chat.svg";
import styles from "./headerRight.module.css";
import Avatar from "@/components/common/Avatar";

const HeaderRight = () => {
  return (
    <div className={styles.headerRightContainer}>
      <IconButton>
        <Announcement />
      </IconButton>
      <IconButton>
        <Calender />
      </IconButton>
      <IconButton>
        <Chat />
      </IconButton>
      <Avatar size={40} />
    </div>
  );
};

export default HeaderRight;
