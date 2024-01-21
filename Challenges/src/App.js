import { useEffect, useState } from "react";
import SelectCurrency from "./SelectCurrency";
import ErrorMsg from "./ErrorMsg";

// API `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [inputNum, setInputNum] = useState();
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [test, setTest] = useState([]);

  const [error, setError] = useState("");
  // const [result, setResult] = useState();

  function handleSum(e) {
    setInputNum(() => e.target.value);
  }

  function handleCurFrom(currency) {
    setCurrencyFrom(() => currency);
  }

  useEffect(
    function () {
      async function fetchGetCurRatio() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${inputNum}&from=${currencyFrom}&to=${currencyTo}`
          );

          if (!res) throw new Error("Problem getting data");

          const data = await res.json();
          console.log(data);
          // console.log(data.rates);
          const { rates } = data;
          const [penis] = Object.values(rates);
          console.log(rates);
          console.log(penis);
          setTest(Object.values(rates));
        } catch (error) {
          // setError(error.message);
          console.log(error);
        }
      }
      fetchGetCurRatio();
    },
    [inputNum, currencyFrom, currencyTo]
  );

  return (
    <div className="flex flex-col ml-2 mt-2 gap-2">
      <div className="flex gap-1">
        <input
          onChange={handleSum}
          type="text"
          className="border border-black rounded-sm"
        />
        {/* <SelectCurrency
          onCurFrom={handleCurFrom}
          inputNum={inputNum}
        />
        <SelectCurrency /> */}
        <select
          onChange={(e) => handleCurFrom(e.target.value)}
          className="border border-black rounded-sm"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          onChange={(e) => setCurrencyTo(e.target.value)}
          className="border border-black rounded-sm"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <p>FROM: {currencyFrom}</p>
      <p>TO: {currencyTo}</p>
      <p>{test}</p>

      {/* <ErrorMsg message={"hallo"} /> */}
      {/* <ErrorMsg message={error} /> */}
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="flex flex-col gap-4 my-2">
//       <TextExpander buttonText={"Show more"} collapsNumWords={12}>
//         Space traverl is the ultimate adventure! Imagine soaring past the stars
//         and exploring new worlds. It is the stuff of dreams and science fiction,
//         but belive it or not, space travel is a real thing. Humans and robots
//         are constantly venturing out into the cosmos to uncover its secrets and
//         push the boundaries of what is possible.
//       </TextExpander>

//       <TextExpander
//         buttonText={"Show text"}
//         buttonColor="orange"
//         collapsNumWords={16}
//       >
//         Space travel requires some seriously amazing technology and
//         collaboration between countries, privat companies and international
//         space organizations. And while it's not always easy (or cheap), the
//         seults are out of this world. Think about the first time humans stepped
//         foot on the moon or when rovers were sent to roam around on Mars.
//       </TextExpander>

//       <TextExpander
//         collapsNumWords={10}
//         defaultIsOpen={true}
//         className={"bg-gray-200 rounded-md border border-gray-500 py-4"}
//       >
//         Space missions have given us incredible insights into our univers and
//         have inspiired future generations to keep reaching for sthe stars. Space
//         travel is a pretty cool thing to think about. Who knows what we'll
//         discover next!
//       </TextExpander>
//     </div>
//   );
// }

// function TextExpander({
//   collapsNumWords = 10,
//   buttonTextOpen = "Show less",
//   buttonTextClose = "Show more",
//   buttonColor = "blue",
//   defaultIsOpen = false,
//   className = {},
//   children,
// }) {
//   const [isOpen, setIsOpen] = useState(defaultIsOpen);

//   const points = "...";

//   const displayText = isOpen
//     ? children
//     : children.split(" ").slice(0, collapsNumWords).join(" ") + points;

//   function handleIsOpen() {
//     setIsOpen((isOpen) => !isOpen);
//   }

//   const textStyle = {
//     color: buttonColor,
//   };

//   return (
//     <div className={className}>
//       <span>{displayText}</span>
//       <button style={textStyle} onClick={handleIsOpen} className="ml-2 ">
//         {isOpen ? buttonTextOpen : buttonTextClose}
//       </button>
//     </div>
//   );

// return (
//   <div className="my-2">
//     {isOpen ? (
//       <TextOpen
//         buttonColor={buttonColor}
//         handleIsOpen={handleIsOpen}
//         textStyle={textStyle}
//         className={className}
//       >
//         {children}
//       </TextOpen>
//     ) : (
//       <TextClosed
//         buttonText={buttonText}
//         buttonColor={buttonColor}
//         handleIsOpen={handleIsOpen}
//         buttonText={buttonText}
//         collapsNumWords={collapsNumWords}
//       >
//         {children}
//       </TextClosed>
//     )}
//   </div>
// );
// }

// function TextOpen({ textColor, handleIsOpen, textStyle, className, children }) {
//   return (
//     <div className={className}>
//       <p>
//         {children}
//         <span
//           className="ml-2 cursor-pointer"
//           style={textStyle}
//           onClick={handleIsOpen}
//           color={textColor}
//         >
//           Show less
//         </span>
//       </p>
//     </div>
//   );
// }

// function TextClosed({
//   text,
//   textColor,
//   handleIsOpen,
//   textStyle,
//   collapsNumWords,
//   children,
// }) {
//   const points = "...";

//   return (
//     <div>
//       <p>
//         {children.slice(0, collapsNumWords) + `${points}`}
//         {/* <ActionButton>{children}</ActionButton> */}
//         <span
//           className="ml-2 cursor-pointer"
//           style={textStyle}
//           onClick={handleIsOpen}
//           color={textColor}
//         >
//           {text}
//         </span>
//       </p>
//     </div>
//   );
// }

// function ActionButton() {
//   return (
//     <span
//       className="ml-2 cursor-pointer"
//       style={textStyle}
//       onClick={handleIsOpen}
//       color={textColor}
//     >
//       {text}
//     </span>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////
// <div className={className}>
//   <p>
//     {children}
//     <span
//       className="ml-2 cursor-pointer"
//       style={test}
//       onClick={handleIsOpen}
//       color={textColor}
//     >
//       Show less
//     </span>
//   </p>
// </div>

// <div>
//   <p>
//     {children.slice(0, collapsNumWords) + `${points}`}
//     <span
//       className="ml-2 cursor-pointer"
//       style={test}
//       onClick={handleIsOpen}
//       color={textColor}
//     >
//       {text}
//     </span>
//   </p>
// </div>
////////////////////////////////////////////////////////////////////////////////////////////////

// export default function App() {
//   return <TipCalculator />;
// }

// const tipOptions = [
//   { text: "Dissatisfied (0%)", value: 0 },
//   { text: "It was okay (5%)", value: 5 },
//   { text: "It was good (10%)", value: 10 },
//   { text: "Absolutly amazing (20%)", value: 20 },
// ];

// function TipCalculator() {
//   const [bill, setBill] = useState(0);
//   const [tipPercentOwn, setTipPercentOwn] = useState(0);
//   const [tipPercentFriend, setTipPercentFriend] = useState(0);

//   const tip = bill * ((tipPercentOwn + tipPercentFriend) / 2 / 100);

//   function handleReset() {
//     setBill(0);
//     setTipPercentOwn(0);
//     setTipPercentFriend(0);
//   }

//   return (
//     <div>
//       <Bill bill={bill} onSetBill={setBill} />
//       <Tip percentage={tipPercentOwn} onSelect={setTipPercentOwn}>
//         How did you like the service?
//       </Tip>
//       <Tip percentage={tipPercentFriend} onSelect={setTipPercentFriend}>
//         How did your friend like the service?
//       </Tip>
//       <OutputText bill={bill} tip={tip} onReset={handleReset} />
//     </div>
//   );
// }

// function Bill({ bill, onSetBill }) {
//   return (
//     <div className="flex ">
//       <p>How much was the Bill?</p>
//       <input
//         className="border-2 rounded-sm border-black mx-2"
//         type="text"
//         value={bill}
//         onChange={(e) => onSetBill(+e.target.value)}
//       />
//     </div>
//   );
// }

// function Tip({ percentage, onSelect, children }) {
//   return (
//     <div className="flex my-2">
//       <p>{children}</p>
//       <select
//         className="mx-2 border-black border-2"
//         value={percentage}
//         onChange={(e) => onSelect(+e.target.value)}
//       >
//         {tipOptions.map((option) => (
//           <option value={option.value} key={option.value}>
//             {option.text}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function OutputText({ tip, bill, onReset }) {
//   return (
//     <div>
//       {bill !== 0 || bill === "" ? (
//         <div>
//           <h1 className="font-bold text-2xl my-6">
//             You pay $ {bill + tip} ($ {bill} + $ {tip} tip)
//           </h1>
//           <button
//             className="px-8 py-2 border border-black bg-gray-200"
//             onClick={onReset}
//           >
//             Reset
//           </button>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

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
