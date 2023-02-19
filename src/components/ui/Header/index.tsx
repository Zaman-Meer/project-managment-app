"use client";

import SearchInput from "@/components/common/SearchInput";
import { useEffect, useState } from "react";
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
import styles from "./header.module.css";

const Header = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftHeader}>
        <HeaderLeft />
      </div>
      <div className={styles.center}>
        <SearchInput value="" onChange={() => {}} />
      </div>
      <div className={styles.rightHeader}>
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
