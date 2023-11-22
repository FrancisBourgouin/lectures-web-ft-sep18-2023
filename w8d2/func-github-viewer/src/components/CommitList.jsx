import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommitListItem =
    Array.isArray(commits) &&
    commits.map((commit) => <CommitListItem key={commit.sha} {...commit} />);
  return <ul className="CommitList">{parsedCommitListItem}</ul>;
}
