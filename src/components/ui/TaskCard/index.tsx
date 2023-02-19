"use client";
import type { Identifier, XYCoord } from "dnd-core";
import type { FC } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TaskType } from "@/types";
import { getDurationFromDate } from "@/utils/helpers";
import styles from "./taskCard.module.css";
import Avatar from "@/components/common/Avatar";

export interface CardProps {
  task: TaskType;
  index: number;
  moveCard: (
    dragIndex: number,
    hoverIndex: number,
    task: TaskType,
    status: string
  ) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const TaskCard = ({ task, index, moveCard }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    any,
    void,
    { handlerId: Identifier | null }
  >({
    accept: task?.status,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item?.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      !!hoverIndex && moveCard(dragIndex, hoverIndex, task, task?.status);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: task?.status,
    item: () => {
      return { id: task?.id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={styles.cardContainer}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <div className={styles.header}>
        <div className={styles.projectNameBox}>
          <span
            className={styles.colorStatus}
            style={{ backgroundColor: task?.project?.color }}
          />
          <span className={styles.projectName}>{task?.project?.name}</span>
          {/* <task.project.icon /> */}
        </div>
      </div>
      <div className={styles.title}>{task?.title}</div>
      <div className={styles.tagsBox}>
        {task?.tags?.map((tag, index) => (
          <span
            key={index}
            className={styles.tag}
            style={{ backgroundColor: tag?.color }}
          >
            {tag?.name}
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.duration}>
          {task?.createdAt &&
            `Created ${getDurationFromDate(new Date(task?.createdAt))} ${
              getDurationFromDate(new Date(task?.createdAt)) !== "today"
                ? "ago"
                : ""
            }`}
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default TaskCard;
