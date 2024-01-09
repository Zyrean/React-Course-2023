import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

const tipOptions = [
  { text: "Dissatisfied (0%)", value: 0 },
  { text: "It was okay (5%)", value: 5 },
  { text: "It was good (10%)", value: 10 },
  { text: "Absolutly amazing (20%)", value: 20 },
];

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [tipPercentOwn, setTipPercentOwn] = useState(0);
  const [tipPercentFriend, setTipPercentFriend] = useState(0);

  function handleCalcTotalBill(e) {
    setBill(e);
    setTotalBill(e);
  }

  return (
    <div>
      <Bill
        bill={bill}
        onSetBill={setBill}
        handleCalcTotalBill={handleCalcTotalBill}
      />
      <Tip
        tipPercentOwn={tipPercentOwn}
        onTipPercentOwn={setTipPercentOwn}
        handleCalcTotalBill={handleCalcTotalBill}
        totalBill={totalBill}
        setTotalBill={setTotalBill}
        // setTipPercentOwn={setTipPercentOwn}
      >
        How did you like the service?
      </Tip>
      <Tip
        tipPercentFriend={tipPercentFriend}
        onTipPercentFriend={setTipPercentFriend}
        handleCalcTotalBill={handleCalcTotalBill}
        totalBill={totalBill}
        setTotalBill={setTotalBill}
        // tipPercentOwn={tipPercentOwn}
      >
        How did your friend like the service?
      </Tip>
      <OutputText
        bill={bill}
        totalBill={totalBill}
        tipPercentOwn={tipPercentOwn}
        tipPercentFriend={tipPercentFriend}
      />
    </div>
  );
}

function Bill({ bill, onSetBill, handleCalcTotalBill }) {
  return (
    <div className="flex ">
      <p>How much was the Bill?</p>
      <input
        className="border-2 rounded-sm border-black mx-2"
        type="text"
        placeholder="0"
        value={bill}
        // onChange={(e) => handleCalcTotalBill(+e.target.value)}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function Tip({
  tipPercentOwn,
  setTipPercentOwn,
  totalBill,
  setTotalBill,
  children,
}) {
  const [description, setDescription] = useState("");

  function handleDescription(e) {
    setDescription(e);
    setTipPercentOwn(0);
    setTipPercentOwn(e.match(/(\d+)/)[0]);
    setTotalBill(totalBill + totalBill * tipPercentOwn);
  }

  return (
    <div className="flex my-2">
      <p>{children}</p>
      <select
        className="mx-2 border-black border-2"
        value={description}
        onChange={(e) => handleDescription(e.target.value)}
      >
        {tipOptions.map((option) => (
          <option
            value={option.text}
            key={option.value}
            // onChange={(e) => setDescription(e.target.value)}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function OutputText({ bill, totalBill, tipPercentOwn, tipPercentFriend }) {
  return (
    <div>
      {bill !== 0 || bill === "" ? (
        <div>
          <h1 className="font-bold text-2xl my-6">
            You pay $ {totalBill} ($ {bill} + $ {totalBill / tipPercentFriend}{" "}
            tip)
          </h1>
          <button className="px-8 py-2 border border-black bg-gray-200">
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// const fags = [
//   {
//     titel: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
//   },
//   {
//     titel: "How long do i have to return my chair?",
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
//   },
//   {
//     titel: "Do you skip the countries outside the EU?",
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//   },
// ];

// function Accordion({ data }) {
//   const [curOpen, setCurOpen] = useState(null);

//   return (
//     <div className="accordion">
//       {data.map((item, i) => (
//         <Item
//           curOpen={curOpen}
//           onOpen={setCurOpen}
//           titel={item.titel}
//           num={i}
//           key={item.titel}
//         >
//           {item.text}
//         </Item>
//       ))}
//     </div>
//   );
// }

// function Item({ titel, num, curOpen, onOpen, children }) {
//   const isActive = num === curOpen;

//   function handleToggle() {
//     onOpen(isActive ? null : num);
//   }

//   return (
//     <div className={isActive ? "item open-box" : "item"} onClick={handleToggle}>
//       <p className={isActive ? `number open-number` : "number"}>0{num + 1}</p>
//       <p className={isActive ? `titel open-text` : "titel"}>{titel}</p>
//       <p className="icon">{isActive ? "-" : "+"}</p>
//       {isActive && <div className="content-box">{children}</div>}
//     </div>
//   );
// }

// function DateCounter(e) {
//   // e.preventDefault();
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const curDate = new Date();
//   curDate.setDate(curDate.getDate() + count);

//   const handleCountPrev = function (e) {
//     e.preventDefault();
//     setCount((curCount) => curCount - step);
//   };

//   const handleCountNext = function (e) {
//     e.preventDefault();
//     setCount((curCount) => curCount + step);
//   };

//   const handleReset = function () {
//     setStep(1);
//     setCount(0);
//   };

//   return (
//     <div className="flex flex-col justify-center">
//       <div className="flex justify-center">
//         <input
//           type="range"
//           min={0}
//           max={10}
//           value={step}
//           onChange={(e) => setStep(+e.target.value)}
//         ></input>
//         <span>{step}</span>
//       </div>
//       <div className="flex justify-center">
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleCountPrev}
//         >
//           -
//         </button>
//         <input
//           type="text"
//           value={count}
//           onChange={(e) => setCount(+e.target.value)}
//           className="border border-gray-300"
//         ></input>
//         <button
//           className="bg-gray-200 border-2 border-gray-600 rounded-md px-2"
//           onClick={handleCountNext}
//         >
//           +
//         </button>
//       </div>
//       <p className=" text-center font-semibold text-2xl my-4">
//         <span>{count === 0 ? "Today is " : ""}</span>
//         <span>{count > 0 ? `${count} day from today is ` : ""}</span>
//         <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
//         {curDate.toDateString()}
//       </p>

//       {count > 0 || step > 1 ? (
//         <button
//           className="bg-gray-200 border border-gray-600 font-semibold px-4 rounded-sm w-20"
//           onClick={() => handleReset()}
//         >
//           Reset
//         </button>
//       ) : null}
//     </div>
//   );
// }

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
