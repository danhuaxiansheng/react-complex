// context.js
import { createContext, useReducer } from "react";

const initialState = {
  theme: "dark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        theme: action.val,
      };
    default:
      return state;
  }
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  debugger;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
