import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { points, maxPoints, numQuestions, index } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />

      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/{maxPoints} points
      </p>
    </header>
  );
}
