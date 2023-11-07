export default function Result(props) {
  const { switchTo, modes, currentMode, gameStats } = props;

  const rate =
    gameStats.answered && Math.round((gameStats.goodAnswers / gameStats.answered) * 100);
  return (
    <section className="Result">
      {rate !== undefined && <h1>Current Score: {rate}%</h1>}
      {currentMode === modes.edit && (
        <button onClick={() => switchTo(modes.quiz)}>View Quiz</button>
      )}
      {currentMode === modes.quiz && (
        <button onClick={() => switchTo(modes.edit)}>Add Question</button>
      )}
    </section>
  );
}
