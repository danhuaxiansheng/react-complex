import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemedButton from "./themedButton";

import "./style/index.scss";

function SetTitle() {
  useEffect(() => {
    document.title = "蛋花网";
  }, []);
}

export default function Page() {
  return (
    <div className="header">
      <SetTitle></SetTitle>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M512 503.5H381.7a48 48 0 01-45.3-32.1L265 268.1l-9-25.5 2.7-124.6L338.2 8.5l23.5 67.1L512 503.5z"
            fill="#0473ff"
            data-original="#28b446"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#0473ff"
            data-original="#219b38"
            d="M361.7 75.6L265 268.1l-9-25.5 2.7-124.6L338.2 8.5z"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M338.2 8.5l-82.2 234-80.4 228.9a48 48 0 01-45.3 32.1H0l173.8-495h164.4z"
            fill="#0473ff"
            data-original="#518ef8"
          />
        </svg>
        AGE NET
      </div>
      <div className="header-menu">
        <NavLink to="/">工具库</NavLink>
        <NavLink to="/project">项目集</NavLink>
        <NavLink to="/components">组件库</NavLink>
      </div>
      <div className="user-settings">
        <ThemedButton></ThemedButton>
      </div>
    </div>
  );
}
