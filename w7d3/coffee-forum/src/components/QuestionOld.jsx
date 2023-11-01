import { useState } from "react";
import ReplyList from "./ReplyList";

import { questionData } from "../data/postData";
import { usersObj } from "../data/userData";
import ReplyForm from "./ReplyForm";
export default function Question(props) {
  const [question, setQuestion] = useState(questionData);
  const [users, setUsers] = useState(usersObj);

  const incrementQuestionLikes = () => {
    const updatedQuestion = { ...question };
    updatedQuestion.likes = updatedQuestion.likes + 1;

    setQuestion(updatedQuestion);
  };
  const decrementQuestionLikes = () => {
    setQuestion({ ...question, likes: question.likes - 1 });
  };
  const incrementReplyLikes = (replyId) => {
    const updatedQuestion = { ...question };

    const replyIndex = question.replies.findIndex((reply) => reply.id === replyId);
    const updatedReply = { ...question.replies[replyIndex] };
    updatedReply.likes = updatedReply.likes + 1;

    updatedQuestion.replies[replyIndex] = updatedReply;

    setQuestion(updatedQuestion);
  };
  const decrementReplyLikes = (replyId) => {
    const updatedQuestion = { ...question };

    const replyIndex = question.replies.findIndex((reply) => reply.id === replyId);
    const updatedReply = { ...question.replies[replyIndex] };
    updatedReply.likes = updatedReply.likes - 1;

    updatedQuestion.replies[replyIndex] = updatedReply;

    setQuestion(updatedQuestion);
  };
  const addReplyToQuestion = (reply, authorId) => {
    const updatedQuestion = { ...question };
    const updatedReplies = [
      ...question.replies,
      { content: reply, authorId, likes: 0, id: question.replies.length + 1 },
    ];

    updatedQuestion.replies = updatedReplies;

    setQuestion(updatedQuestion);
  };

  return (
    <article className="Question">
      <section>
        <h1>
          {question.title} -{" "}
          <div>
            <button onClick={decrementQuestionLikes}>-</button>
            {question.likes} likes <button onClick={incrementQuestionLikes}>+</button>
          </div>
        </h1>
        <p>{question.question}</p>

        <p>
          by: <img src="/profile_pictures/1.png" alt="" />{" "}
          {users[question.authorId].username}
        </p>
      </section>
      <ReplyList
        replies={question.replies}
        users={users}
        incrementReplyLikes={incrementReplyLikes}
        decrementReplyLikes={decrementReplyLikes}
      />

      <ReplyForm users={users} onSubmit={addReplyToQuestion} />
    </article>
  );
}
