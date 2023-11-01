import { useState } from "react";

export default function ReplyForm(props) {
  const { users, onSubmit } = props;

  const [reply, setReply] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleReplyChange = (event) => {
    setReply(event.currentTarget.value);
  };

  const handleSelectChange = (event) => {
    setAuthorId(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(reply, authorId);
  };
  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reply"
        value={reply}
        onChange={handleReplyChange}
      />
      <select name="" onChange={handleSelectChange} value={authorId}>
        <option value="">Select a user</option>
        {Object.values(users).map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      <button>Add a reply!</button>
    </form>
  );
}
