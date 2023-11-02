# Todoinator

Todo! We should be able to add a task, due date, color code, mark them as complete, delete, (edit stretch)

## Data

### Todo

```jsx
const todo = {
  id: "",
  task: "",
  dueDate: "",
  color: "",
  isComplete: "",
};
```

### Todo

```jsx
const todos = { 1: todo, 2: todo };

const todos = [];
```

## Mock Data

```jsx
const todo1 = {
  id: 1,
  task: "Watch Nightmare Before Christmas",
  dueDate: "2023-11-02",
  color: "red",
  isComplete: false,
};
const todo2 = {
  id: 2,
  task: "Buy Xenoblade Chronicles",
  dueDate: "2023-11-03",
  color: "blue",
  isComplete: true,
};
const todo3 = {
  id: 3,
  task: "Take a screencap for attendance before the break",
  dueDate: "2023-11-01",
  color: "blue",
  isComplete: false,
};

const todos = { 1: todo1, 2: todo2, 3: todo3 };
```

## Structure

### HTML

### Components

- App
  - Header
  - TaskForm
  - TaskList
    - TaskListItem

### Component Data

View drawing attached.
