"use client";
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import update from "immutability-helper";

import styles from "./boardWorkspace.module.css";
import { ColumnType } from "@/types";
import { TaskType } from "./../../../types";
import { Columns, Tasks } from "@/utils/constant";
import BoardColumn from "./../BoardColumn/index";

// interface BoardTask {
//   [type: string]: {
//     type: ColumnType;
//     tasks: TaskType[];
//   };
// }

const AllTasks = () => {
  let tasks = {};
  Columns?.forEach((col) => {
    tasks = {
      ...tasks,
      [col.value]: {
        type: col,
        tasks: Tasks?.filter((task) => task?.status === col?.value),
      },
    };
  });
  return tasks;
};

const BoardWorkspace = () => {
  const [allTasks, setAllTasks] = useState<any>({});

  useEffect(() => {
    setAllTasks(AllTasks());
  }, []);

  const handleSort = (tasks: TaskType[], type: string) => {
    setAllTasks((prev: any) => ({
      ...prev,
      [type]: {
        ...prev[type],
        tasks: tasks,
      },
    }));
  };

  const handleAddTask = (task: TaskType, type: string) => {
    setAllTasks((prev: any) => ({
      ...prev,
      [type]: {
        ...prev[type],
        tasks: [...prev[type]?.tasks, task],
      },
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.boardContainer}>
        {Columns?.map((col, index) => (
          <BoardColumn
            key={index}
            tasks={allTasks[col?.value]?.tasks}
            type={col}
            onSorted={handleSort}
            onAddNewTask={handleAddTask}
          />
        ))}
        {/* <BoardColumn tasks={}  /> */}
      </div>
    </DndProvider>
  );
};

export default BoardWorkspace;
