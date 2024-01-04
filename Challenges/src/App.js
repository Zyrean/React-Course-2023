import { useState } from "react";

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter(e) {
  // e.preventDefault();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const curDate = new Date();
  curDate.setDate(curDate.getDate() + count);

  const handleCountPrev = function (e) {
    e.preventDefault();
    setCount((curCount) => curCount - step);
  };

  const handleCountNext = function (e) {
    e.preventDefault();
    setCount((curCount) => curCount + step);
  };

  const handleReset = function () {
    setStep(1);
    setCount(0);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <span>{step}</span>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleCountPrev}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          className="border border-gray-300"
        ></input>
        <button
          className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
          onClick={handleCountNext}
        >
          +
        </button>
      </div>
      <p className=" text-center font-semibold text-2xl my-4">
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count > 0 ? `${count} day from today is ` : ""}</span>
        <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
        {curDate.toDateString()}
      </p>

      {count > 0 || step > 1 ? (
        <button
          className="bg-gray-200 border border-gray-600 font-semibold px-4 rounded-sm w-20"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      ) : null}

      {/* <button
        className={
          count > 0 || step > 1
            ? "bg-gray-200 border border-gray-600 font-semibold px-4 rounded-sm w-20"
            : "opacity-0"
        }
        onClick={() => handleReset()}
      >
        Reset
      </button> */}
    </div>
  );
}

//------------------------------------------------------------------------2------------------------------------------------------------------------//

// export default function App() {
//   return (
//     <div>
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3467,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the bilding blocks of React app?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question:
//       "What is the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from Parent to child component?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completly synchronised with...?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   return (
//     <div className="flex flex-wrap w-92">
//       {questions.map((item) => (
//         <FlashCard item={item} key={item.id} />
//       ))}
//     </div>
//   );
// }

// function FlashCard({ item }) {
//   const [activeId, setActiveId] = useState(null);

//   function handleClick(id) {
//     setActiveId(id !== activeId ? id : null);
//   }

//   return (
//     <div
//       className={
//         activeId === item.id
//           ? "bg-red-500 px-8 py-32 rounded-md cursor-pointer"
//           : "bg-gray-200 px-8 py-32 border border-gray-500 rounded-md cursor-pointer"
//       }
//       onClick={() => handleClick(item.id)}
//     >
//       <p
//         className={
//           activeId === item.id
//             ? "text-white font-extrabold"
//             : "text-black font-semibold"
//         }
//       >
//         {activeId === item.id ? item.answer : item.question}
//       </p>
//     </div>
//   );
// }

//------------------------------------------------------------------------1------------------------------------------------------------------------//

// export default function App() {
//   return (
//     <div>
//       <DateCounter />
//     </div>
//   );
// }

// function DateCounter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const curDate = new Date();
//   curDate.setDate(curDate.getDate() + count);

//   // const curDay = curDate.getDay();

//   const handleStepPrev = function () {
//     setStep((curStep) => curStep - 1);
//   };

//   const handleStepNext = function () {
//     setStep((curStep) => curStep + 1);
//   };

//   const handleCountPrev = function () {
//     setCount((curCount) => curCount - step);
//   };

//   const handleCountNext = function () {
//     setCount((curCount) => curCount + step);
//   };

//   return (
//     <div className="flex flex-col justify-center">
//       <div className="flex justify-center">
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleStepPrev}
//         >
//           -
//         </button>
//         <Counter type={`Step`} num={step} />
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleStepNext}
//         >
//           +
//         </button>
//       </div>
//       <div className="flex justify-center">
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleCountPrev}
//         >
//           -
//         </button>
//         <Counter type={`Count`} num={count} />
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleCountNext}
//         >
//           +
//         </button>
//       </div>
//       <p className="bg-red-500 text-center font-semibold text-2xl my-4">
//         <span>{count === 0 ? "Today is " : ""}</span>
//         <span>{count > 0 ? `${count} day from today is ` : ""}</span>
//         <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
//         {curDate.toDateString()}
//       </p>
//     </div>
//   );
// }

// const Counter = function ({ type, num }) {
//   return (
//     <p className="text-center font-semibold text-2xl mx-1">
//       {type}: {num}
//     </p>
//   );
// };
