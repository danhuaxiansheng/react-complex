// context.js
import { createContext, useReducer } from "react";

const initialState = {
  theme: localStorage.getItem("theme") ?? "light",
  colorPrimary: localStorage.getItem("colorPrimary") ?? "#0162ff"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      localStorage.setItem("theme", action.val)
      return {
        ...state,
        theme: action.val,
      };
    case "changeColor":
      localStorage.setItem("colorPrimary", action.val)
      return {
        ...state,
        colorPrimary: action.val,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
