"use client";

import { useCallback } from "react";
import update from "immutability-helper";
import FilterIcon from "../../../../public/icons/filter.svg";
import SortbyIcon from "../../../../public/icons/sortby.svg";
import HMenu from "../../../../public/icons/horizontal-menu.svg";
import { ColumnType, ProjectType, TaskType } from "@/types";
import TaskCard from "../TaskCard";
import AddCard from "@/components/common/AddCard";
import { Projects } from "@/utils/constant";

import styles from "./boardColumn.module.css";
import { formatDate, generateRandomId } from "@/utils/helpers";

interface BoardColumnProps {
  tasks: TaskType[];
  type: ColumnType;
  onSorted: (tasks: TaskType[], type: string) => void;
  onAddNewTask: (task: TaskType, type: string) => void;
}
const projectsOptions = Projects?.map((project) => ({
  label: project?.name,
  value: project?.id,
}));

const BoardColumn = ({
  tasks,
  type,
  onSorted,
  onAddNewTask,
}: BoardColumnProps) => {
  const handleAddTask = (title: string, projectId: string) => {
    const selectedProject = Projects?.find(
      (project) => project?.id === projectId
    );
    const newTask: TaskType = {
      id: generateRandomId(6),
      title,
      description: "",
      status: type?.value,
      project: selectedProject as ProjectType,
      createdAt: formatDate(new Date()),
    };

    onAddNewTask(newTask, type?.value);
  };

  const handleSortCards = useCallback(
    (dragIndex: number, hoverIndex: number, task: TaskType, status: string) => {
      if (tasks) {
        const sorted = update(tasks, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, tasks[dragIndex] as TaskType],
          ],
        });
        onSorted(sorted, status);
      }
    },
    [tasks]
  );

  const renderCard = useCallback(
    (task: TaskType, index: number) => {
      return (
        <TaskCard
          key={task?.id}
          task={task}
          index={index}
          moveCard={handleSortCards}
        />
      );
    },
    [tasks]
  );

  return (
    <div className={styles.columnContainer}>
      <div className={styles.header}>
        <span className={styles.type}>{type?.label}</span>
        {tasks && <span>{`(${tasks?.length})`}</span>}
        <FilterIcon />
        <SortbyIcon />
        <span className={styles.menu}>
          <HMenu />
        </span>
      </div>
      <div className={styles.taskContainer}>
        {tasks?.map((task, index) => renderCard(task, index))}
      </div>
      <AddCard projects={projectsOptions} onAdd={handleAddTask} />
    </div>
  );
};

export default BoardColumn;
