import { useState } from "react";

const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

export default function TaskForm(props) {
  const { onSubmit } = props;
  // const [content, setContent] = useState("")
  // const [dueDate, setDueDate] = useState("")
  // const [color, setColor] = useState("")

  const initialValues = { content: "", color: "", dueDate: "" };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    // event.currentTarget.value
    const { value, name } = event.currentTarget;

    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.color && formData.content && formData.dueDate) {
      onSubmit(formData);

      setFormData(initialValues);
    }
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        placeholder="Enter the task content"
        onChange={handleChange}
        value={formData.content}
      />
      <input
        type="date"
        name="dueDate"
        placeholder="Enter the date"
        onChange={handleChange}
        value={formData.dueDate}
      />
      <select name="color" onChange={handleChange} value={formData.color}>
        <option value="">Select a color code</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <button>Add a task!</button>
    </form>
  );
}
