import { Fragment } from "react";
import { UserAvatarDataType } from "@/types";
import { randomHexColorInRange } from "@/utils/helpers";
import ArrowChevronDown from "../../../../public/icons/arrow-chevron-down.svg";
import Avatar from "../Avatar";
import styles from "./usersPickerFilter.module.css";

interface UsersPickerFilterProps {
  users: UserAvatarDataType[];
  onSelect: (userData: UserAvatarDataType) => void;
}

const UsersPickerFilter = ({ users, onSelect }: UsersPickerFilterProps) => {
  return (
    <div className={styles.usersContainer}>
      <div className={styles.avatarsContainer}>
        {users?.slice(0, 2)?.map((user, index) => (
          <Fragment key={user?.id}>
            <span
              className={styles.avatarContainer}
              onClick={() => onSelect(user)}
            >
              <Avatar imageUrl={user?.imageUrl} />
              <span
                className={styles.label}
                style={{
                  backgroundColor: randomHexColorInRange(),
                }}
              >
                {user?.numberOfTasks}
              </span>
            </span>
            {users?.slice(0, 2)?.length - 1 !== index && (
              <span className={styles.divider} />
            )}
          </Fragment>
        ))}
      </div>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdownBtn}>
          <ArrowChevronDown />
        </button>
        <span className={styles.dropdownContent}>
          {users?.slice(2)?.map((user) => (
            <span
              key={user?.id}
              className={styles.avatarContainer}
              style={{ margin: "2px 0" }}
              onClick={() => onSelect(user)}
            >
              <Avatar imageUrl={user?.imageUrl} />
              <span
                className={styles.label}
                style={{
                  backgroundColor: randomHexColorInRange(),
                }}
              >
                {user?.numberOfTasks}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default UsersPickerFilter;
