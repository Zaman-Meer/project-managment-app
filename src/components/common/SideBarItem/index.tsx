"use client";
import React, { memo } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { clsx } from "clsx";
import { SideBarLinksType } from "@/types";
import styles from "./SideBarItem.module.css";

interface SideBarItemType {
  item: SideBarLinksType;
  isSideBarOpened: boolean;
}

const SideBarItem = ({ item, isSideBarOpened }: SideBarItemType) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      href={item.path}
      className={clsx({
        [styles.linkContainer]: true,
        [styles.active]:
          item.path?.includes(segment as string) ||
          (!segment && item.path === "/board"),
      })}
    >
      <item.icon width={22} height={22} />
      <span
        className={clsx({
          [styles.showLabel]: isSideBarOpened,

          [styles.hideLabel]: !isSideBarOpened,
        })}
      >
        {item.label}
      </span>
    </Link>
  );
};

export default memo(SideBarItem);
