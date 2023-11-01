import { useReducer, useState } from "react";
import ReplyList from "./ReplyList";

import { questionData } from "../data/postData";
import { usersObj } from "../data/userData";
import ReplyForm from "./ReplyForm";
import questionReducer from "../reducers/questionReducer";
export default function Question(props) {
  const [users, setUsers] = useState(usersObj);

  const [question, dispatch] = useReducer(questionReducer, questionData);

  const decrementLikes = () => dispatch({ type: "DEC_QUESTION_LIKE" });

  return (
    <article className="Question">
      <section>
        <h1>
          {question.title} -{" "}
          <div>
            <button onClick={decrementLikes}>-</button>
            {question.likes} likes{" "}
            <button onClick={() => dispatch({ type: "INC_QUESTION_LIKE" })}>+</button>
          </div>
        </h1>
        <p>{question.question}</p>

        <p>
          by: <img src="/profile_pictures/1.png" alt="" />{" "}
          {users[question.authorId].username}
        </p>
      </section>
      <ReplyList replies={question.replies} users={users} dispatch={dispatch} />

      <ReplyForm
        users={users}
        onSubmit={(reply, authorId) =>
          dispatch({ type: "ADD_REPLY", payload: { reply, authorId } })
        }
      />
    </article>
  );
}
