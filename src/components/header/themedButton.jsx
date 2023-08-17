import React, { useContext } from "react";
import { AppContext } from "@/reducers/themeContext";

const ThemedButton = React.memo(() => {
  const ctx = useContext(AppContext) || {};
  const { dispatch, state } = ctx;
  const changeTheme = () => {
    dispatch({
      type: "changeTheme",
      val: state.theme === "light" ? "dark" : "light",
    });
  };
  return (
    <>
      <div className="theme-btn" onClick={changeTheme}>
        <svg
          viewBox="0 0 24 22"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </>
  );
});

export default ThemedButton;
