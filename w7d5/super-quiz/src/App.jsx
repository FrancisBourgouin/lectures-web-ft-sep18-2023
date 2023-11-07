import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import QuizForm from "./components/QuizForm";
import Result from "./components/Result";
import { questionArr } from "./data/quizData";

import useQuiz from "./hooks/useQuiz";
import useMode from "./hooks/useMode";

function App() {
  const modes = {
    edit: "EDIT",
    quiz: "QUIZ",
  };
  const { currentMode, switchTo } = useMode(modes, modes.quiz);

  const { currentQuestion, gameStats, addQuestion, validateAnswer } =
    useQuiz(questionArr);

  return (
    <>
      <Header />
      <main>
        <Result
          switchTo={switchTo}
          currentMode={currentMode}
          modes={modes}
          gameStats={gameStats}
        />
        {currentMode === "QUIZ" && (
          <QuizForm onSubmit={validateAnswer} prompt={currentQuestion.prompt} />
        )}
        {currentMode === "EDIT" && <QuestionForm onSubmit={addQuestion} />}
      </main>
    </>
  );
}

export default App;
