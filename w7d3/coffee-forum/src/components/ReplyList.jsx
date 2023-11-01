import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  // const { replies, users, incrementReplyLikes, decrementReplyLikes } = props;
  const { replies, users, dispatch } = props;

  const parsedReplies = replies.map((reply) => (
    <ReplyListItem
      key={reply.id}
      {...reply}
      profileUrl={users[reply.authorId].profile_url}
      username={users[reply.authorId].username}
      incrementReplyLikes={() =>
        dispatch({ type: "INC_REPLY_LIKE", payload: { replyId: reply.id } })
      }
      decrementReplyLikes={() =>
        dispatch({ type: "DEC_REPLY_LIKE", payload: { replyId: reply.id } })
      }
    />
  ));
  return <ul className="ReplyList">{parsedReplies}</ul>;
}
