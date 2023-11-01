export const incrementReplyLikes = (state, replyId) => {
  const updatedState = { ...state };
  updatedState.replies = [...state.replies];

  const replyIndex = state.replies.findIndex((reply) => reply.id === replyId);
  const updatedReply = { ...state.replies[replyIndex] };
  updatedReply.likes = updatedReply.likes + 1;

  updatedState.replies[replyIndex] = updatedReply;

  return updatedState;
};
export const decrementReplyLikes = (state, replyId) => {
  const updatedState = { ...state };
  updatedState.replies = [...state.replies];

  const replyIndex = state.replies.findIndex((reply) => reply.id === replyId);
  const updatedReply = { ...state.replies[replyIndex] };
  updatedReply.likes = updatedReply.likes - 1;

  updatedState.replies[replyIndex] = updatedReply;

  return updatedState;
};
export const addReplyToQuestion = (state, payload) => {
  const { reply, authorId } = payload;
  const updatedState = { ...state };
  const updatedReplies = [
    ...state.replies,
    { content: reply, authorId, likes: 0, id: state.replies.length + 1 },
  ];

  updatedState.replies = updatedReplies;

  return updatedState;
};
