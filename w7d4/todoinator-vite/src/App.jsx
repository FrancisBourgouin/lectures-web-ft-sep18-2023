import { useState } from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";

import { tasksObj } from "./data/taskData";
import { createTask, removeTask, toggleTaskCompletion } from "./helpers/taskHelpers";

function App() {
  const [tasks, setTasks] = useState(tasksObj);

  const taskList = Object.values(tasks);

  const markAsComplete = (taskId) => {
    const updatedTasks = toggleTaskCompletion(tasks, taskId);

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = removeTask(tasks, taskId);

    setTasks(updatedTasks);
  };

  const addTask = (formData) => {
    const { content, color, dueDate } = formData;
    const updatedTasks = createTask(tasks, content, dueDate, color);

    setTasks(updatedTasks);
  };
  return (
    <>
      <Header />
      <TaskList
        taskList={taskList}
        markAsComplete={markAsComplete}
        deleteTask={deleteTask}
      />
      <TaskForm onSubmit={addTask} />
    </>
  );

  // const fakeOnSubmit = (formData) => console.log("Form submitted", formData);
  // return <TaskForm onSubmit={fakeOnSubmit} />;
  // const taskList = Object.values(tasks);
  // return (
  //   <TaskList
  //     taskList={taskList}
  //     deleteTask={(id) => console.log("Deleted", id)}
  //     markAsComplete={(id) => console.log("Completed", id)}
  //   />
  // );
  // return (
  //   <TaskListItem
  //     {...task2}
  //     deleteTask={() => console.log("Deleted")}
  //     markAsComplete={() => console.log("Completed")}
  //   />
  // );
}

export default App;
