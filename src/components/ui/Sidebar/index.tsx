"use client";

import { SideBarLinks } from "@/utils/constant";
import { useState, useEffect, useRef } from "react";
import DoubleArrow from "../../../../public/icons/double-arrow.svg";
import ArrowChevronDown from "../../../../public/icons/arrow-chevron-down.svg";
import Hamburger from "../../../../public/icons/hamburger.svg";
import DocumentChecked from "../../../../public/icons/document-check.svg";
import SideBarItem from "../../common/SideBarItem";
import { clsx } from "clsx";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const widthRef = useRef("desktop");

  const toggleSideBar = () => {
    if (widthRef.current === "mobile") {
      setShowMobileMenu(true);
    } else setIsSidebarOpened(!isSidebarOpened);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        if (window.innerWidth < 769) {
          widthRef.current = "mobile";

          setShowMobileMenu(true);
        } else {
          widthRef.current = "desktop";
          setShowMobileMenu(false);
        }
      };
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      {showMobileMenu ? (
        <div
          className={styles.mobileMenu}
          onClick={() => setShowMobileMenu(false)}
        >
          <Hamburger />
        </div>
      ) : (
        <aside
          className={clsx({
            [styles.sidebar]: true,
            [styles.close]: !isSidebarOpened,
          })}
        >
          <div className={styles.sidebarHeader}>
            <div className={styles.dropdown}>
              <span className={styles.status} /> Zaan Corp
              <ArrowChevronDown />
            </div>
            <span onClick={toggleSideBar}>
              <DoubleArrow className={styles.toggle} />
            </span>
          </div>
          <nav className={styles.sidebarMenu}>
            {SideBarLinks?.map((item, index) => (
              <SideBarItem
                key={index}
                item={item}
                isSideBarOpened={isSidebarOpened}
              />
            ))}

            <div className={styles.footer}>
              <SideBarItem
                item={{
                  path: "/board/company",
                  label: "Company",
                  icon: DocumentChecked,
                }}
                isSideBarOpened={isSidebarOpened}
              />
            </div>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
