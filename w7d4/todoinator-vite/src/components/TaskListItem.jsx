export default function TaskListItem(props) {
  const { content, dueDate, isComplete, color, markAsComplete, deleteTask } = props;

  const borderColor = color;
  return (
    <li className="TaskListItem">
      <p style={{ borderColor }}>{content}</p>
      <p style={{ borderColor }}>{dueDate}</p>
      {!isComplete && <button onClick={markAsComplete}>Mark as complete</button>}
      {isComplete && <button onClick={deleteTask}>Delete from list</button>}
    </li>
  );
}
