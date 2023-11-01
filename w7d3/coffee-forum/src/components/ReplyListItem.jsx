export default function ReplyListItem(props) {
  const {
    username,
    content,
    profileUrl,
    likes,
    decrementReplyLikes,
    incrementReplyLikes,
  } = props;
  return (
    <li className="ReplyListItem">
      <div style={{ backgroundImage: `url(${profileUrl})` }} alt="" />
      <p>{username}</p>
      <p>{content}</p>

      <div>
        <button onClick={decrementReplyLikes}>-</button>
        {likes}
        <button onClick={incrementReplyLikes}>+</button>
      </div>
    </li>
  );
}
