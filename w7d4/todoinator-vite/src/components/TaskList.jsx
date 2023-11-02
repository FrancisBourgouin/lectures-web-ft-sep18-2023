import TaskListItem from "./TaskListItem";

export default function TaskList(props) {
  const { taskList, deleteTask, markAsComplete } = props;

  const parsedTaskListItems =
    Array.isArray(taskList) &&
    taskList.map((task) => (
      <TaskListItem
        key={task.id}
        {...task}
        deleteTask={() => deleteTask(task.id)}
        markAsComplete={() => markAsComplete(task.id)}
      />
    ));

  return <ul className="TaskList">{parsedTaskListItems}</ul>;
}
