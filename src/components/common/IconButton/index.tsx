import { clsx } from "clsx";
import styles from "./IconButton.module.css";

interface IconButtonType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: string;
  bgColor?: "default" | "primary" | "secondary";
  size?: number;
  rounded?: boolean;
  style?: {
    [property: string]: number | string;
  };
}

const IconButton = ({
  onClick,
  color,
  bgColor,
  rounded,
  size,
  style,
  children,
}: IconButtonType) => {
  return (
    <button
      className={clsx({
        [styles.iconsWrapper]: true,
        [styles.default]: bgColor === "default" || !bgColor,
        [styles.primary]: bgColor === "primary",
        [styles.secondary]: bgColor === "secondary",
      })}
      style={{
        color: color,
        width: size,
        height: size,
        borderRadius: rounded ? "50%" : "8px",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
