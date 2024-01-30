export default function FinishScreen({ points, maxPoints, highScore }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        Your <strong>highscore</strong> is <strong>{highScore}</strong>{" "}
      </p>
    </>
  );
}
