// Expect state to be questionObj
// action => {type:"", payload:""}

import {
  incrementReplyLikes,
  decrementReplyLikes,
  addReplyToQuestion,
} from "../helpers/questionHelpers";

const INC_QUESTION_LIKE = "INC_QUESTION_LIKE";
const DEC_QUESTION_LIKE = "DEC_QUESTION_LIKE";
const INC_REPLY_LIKE = "INC_REPLY_LIKE";
const DEC_REPLY_LIKE = "DEC_REPLY_LIKE";
const ADD_REPLY = "ADD_REPLY";

export default function questionReducer(state, action) {
  switch (action.type) {
    case INC_QUESTION_LIKE:
      return { ...state, likes: state.likes + 1 };

    case DEC_QUESTION_LIKE:
      return { ...state, likes: state.likes - 1 };

    case INC_REPLY_LIKE:
      return incrementReplyLikes(state, action.payload.replyId);

    case DEC_REPLY_LIKE:
      return decrementReplyLikes(state, action.payload.replyId);

    case ADD_REPLY:
      return addReplyToQuestion(state, action.payload);
  }
}
