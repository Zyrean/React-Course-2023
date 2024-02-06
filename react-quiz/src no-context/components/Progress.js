export default function Progress({ points, maxPoints, numQuestions, index }) {
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
