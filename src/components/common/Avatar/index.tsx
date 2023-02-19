import Image from "next/image";
import styles from "./avatar.module.css";

interface AvatarProps {
  imageUrl?: string;
  size?: number;
  badge?: number;
}

const Avatar = ({ imageUrl, badge, size = 30 }: AvatarProps) => {
  return (
    <button className={styles.avatar}>
      <Image
        src={imageUrl || "/icons/avatar.svg"}
        alt="Avatar"
        width={size}
        height={size}
        priority
      />
      {badge && (
        <span
          className={styles.badge}
          style={{
            left: `${size / 2}px`,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
};

export default Avatar;
