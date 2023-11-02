export const createTask = (tasks, content, dueDate, color) => {
  const id = Math.floor(Math.random() * 1000);

  const newTask = {
    id,
    content,
    dueDate,
    color,
    isComplete: false,
  };

  return { ...tasks, [id]: newTask };
};

export const toggleTaskCompletion = (tasks, taskId) => {
  const updatedTask = { ...tasks[taskId], isComplete: !tasks[taskId].isComplete };

  return { ...tasks, [taskId]: updatedTask };
};

export const updateTask = (tasks, taskId, content, dueDate, color) => {
  const updatedTask = { ...tasks[taskId] };

  updatedTask.content = content;
  updatedTask.dueDate = dueDate;
  updatedTask.color = color;

  return { ...tasks, [taskId]: updatedTask };
};

export const removeTask = (tasks, taskId) => {
  const updatedTasks = { ...tasks };

  delete updatedTasks[taskId];

  return updatedTasks;
};
