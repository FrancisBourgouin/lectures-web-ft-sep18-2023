import useWow from "./useWow";
import { useState } from "react";

export default function useQuiz(questionData) {
  const { sayWow } = useWow();
  const [questions, setQuestions] = useState(questionData);
  const [gameStats, setGameStats] = useState({
    questionIndex: 0,
    answered: 0,
    goodAnswers: 0,
  });
  const currentQuestion = questions[gameStats.questionIndex];

  const addQuestion = (formData) => {
    const id = questions.length + 1;
    const newQuestion = { id, prompt: formData.question, answer: formData.answer };

    setQuestions([...questions, newQuestion]);
  };

  const validateAnswer = (formData) => {
    const updatedGameStats = { ...gameStats };
    if (formData.answer === currentQuestion.answer) {
      updatedGameStats.goodAnswers++;
      sayWow();
    }
    updatedGameStats.answered++;
    updatedGameStats.questionIndex =
      (updatedGameStats.questionIndex + 1) % questions.length;

    setGameStats(updatedGameStats);
  };

  return { currentQuestion, gameStats, addQuestion, validateAnswer };
}
