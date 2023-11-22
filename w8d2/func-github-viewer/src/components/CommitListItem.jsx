export default function CommitListItem(props) {
  const url = props.html_url;
  const message = props.commit.message;
  const date = props.commit.author.date;
  const name = props.commit.author.name;

  return (
    <li className="CommitListItem">
      <p>
        <a href={url} target="_blank">
          {message}
        </a>
      </p>
      <p>
        By: {name}, on {date}
      </p>
    </li>
  );
}
