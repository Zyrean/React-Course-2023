import { useState } from "react";

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const curDate = new Date();
  curDate.setDate(curDate.getDate() + count);

  // const curDay = curDate.getDay();

  const handleStepPrev = function () {
    setStep((curStep) => curStep - 1);
  };

  const handleStepNext = function () {
    setStep((curStep) => curStep + 1);
  };

  const handleCountPrev = function () {
    setCount((curCount) => curCount - step);
  };

  const handleCountNext = function () {
    setCount((curCount) => curCount + step);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleStepPrev}
        >
          -
        </button>
        <Counter type={`Step`} num={step} />
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleStepNext}
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleCountPrev}
        >
          -
        </button>
        <Counter type={`Count`} num={count} />
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleCountNext}
        >
          +
        </button>
      </div>
      <p className="bg-red-500 text-center font-semibold text-2xl my-4">
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count > 0 ? `${count} day from today is ` : ""}</span>
        <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
        {curDate.toDateString()}
      </p>
    </div>
  );
}

const Counter = function ({ type, num }) {
  return (
    <p className="text-center font-semibold text-2xl mx-1">
      {type}: {num}
    </p>
  );
};
