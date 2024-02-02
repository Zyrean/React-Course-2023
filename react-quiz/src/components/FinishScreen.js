export default function FinishScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
}) {
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
      <button
        className="btn btn-ui"
        // onClick={() => dispatch({ type: "dataRecevied", payload: data })}
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
