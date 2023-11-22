import { useState } from "react";

export default function RepoForm(props) {
  const { onSubmit } = props;
  const initialValues = { repo: "", owner: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialValues);
  };

  return (
    <form className="RepoForm" onSubmit={handleSubmit}>
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} />
      <input type="text" name="repo" value={formData.repo} onChange={handleChange} />
      <button>Fetch repo info</button>
    </form>
  );
}
