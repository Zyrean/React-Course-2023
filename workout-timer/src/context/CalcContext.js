import { createContext, useContext, useReducer } from "react";

const initialState = {
  firstName: "Stephan",
  secondName: "Winzer",
  age: 33,
  nicePerson: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "test":
      return {
        ...state,
      };
    default:
      throw new Error("Action not found !!!");
  }
}

const CalcContext = createContext();

function CalcProvider({ children }) {
  const [{ firstName, secondName, age, nicePerson }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <CalcContext.Provider
      value={(firstName, secondName, age, nicePerson, dispatch)}
    >
      {children}
    </CalcContext.Provider>
  );
}

function useCalc() {
  const context = useContext(CalcContext);

  if (context === undefined)
    throw new Error("CalcContext used outside of CalcProvider");

  return context;
}

export { CalcProvider, useCalc };
