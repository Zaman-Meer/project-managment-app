"use client";

import { useState, useEffect } from "react";
import IconButton from "@/components/common/IconButton";
import WorkflowIcon from "../../../../public/icons/workflow.svg";
import DesignIcon from "../../../../public/icons/design.svg";
import CodeIcon from "../../../../public/icons/code.svg";
import AnnouncementIcon from "../../../../public/icons/announcement.svg";
import PinnedIcon from "../../../../public/icons/pinned.svg";
import DoubleFileIcon from "../../../../public/icons/double-file.svg";
import SaveIcon from "../../../../public/icons/save.svg";
import FilterIcon from "../../../../public/icons/filter.svg";
import SortbyIcon from "../../../../public/icons/sortby.svg";
import styles from "./subHeader.module.css";
import Avatar from "@/components/common/Avatar";

const SubHeader = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;
  return (
    <div className={styles.sunHeaderContainer}>
      <div className={styles.leftSubHeader}>
        <div className={styles.heading}>DashBoard</div>
        <div className={styles.actions}>
          <IconButton
            size={30}
            bgColor="primary"
            rounded
            style={{
              padding: "4px",
            }}
          >
            <WorkflowIcon width={30} />
          </IconButton>
          <IconButton
            size={30}
            rounded
            style={{
              backgroundColor: `var(--light-gray-bg)`,
              padding: "4px",
            }}
          >
            <DesignIcon />
          </IconButton>
          <IconButton
            size={30}
            rounded
            style={{
              backgroundColor: `var(--light-gray-bg)`,
              padding: "4px",
            }}
          >
            <CodeIcon />
          </IconButton>
          <IconButton
            size={30}
            rounded
            style={{
              backgroundColor: `var(--light-gray-bg)`,
              padding: "4px",
            }}
          >
            <AnnouncementIcon />
          </IconButton>
          <div className={styles.divider} />
          <Avatar badge={2} />
          <Avatar badge={5} />
          <Avatar badge={1} />
          <Avatar badge={4} />
        </div>
      </div>
      <div className={styles.rightSubHeader}>
        <IconButton>
          <PinnedIcon
            style={{
              color: `var(--bright--yellow-color)`,
            }}
          />
        </IconButton>
        <IconButton>
          <DoubleFileIcon
            style={{
              color: `var(--cold-purple-color)`,
            }}
          />
        </IconButton>
        <IconButton>
          <SaveIcon style={{ marginRight: "5px" }} /> Views
        </IconButton>
        <IconButton>
          <FilterIcon style={{ marginRight: "5px" }} /> Filters
        </IconButton>
        <IconButton>
          <SortbyIcon style={{ marginRight: "5px" }} /> Sort by
        </IconButton>
      </div>
    </div>
  );
};

export default SubHeader;
