import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
// import { ColorPicker } from "antd";
import ThemedButton from "./themedButton";
import { AppContext } from "@/reducers/themeContext";
import { GithubOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./style/index.scss";

function SetTitle() {
  useEffect(() => {
    document.title = "蛋花网";
  }, []);
}

export default function Page() {
  const ctx = useContext(AppContext) || {};
  const { dispatch, state } = ctx;
  // const onChange = (color) => {
  //   dispatch({
  //     type: "changeColor",
  //     val: color.toHexString(),
  //   });
  // };

  const openGithub = () => {
    window.open("https://github.com/danhuaxiansheng");
  };

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
        <NavLink to="/article">文章</NavLink>
      </div>
      <div className="user-settings">
        <Space size={18}>
          <GithubOutlined
            style={{ fontSize: "24px" }}
            onClick={openGithub}
            title="查看github"
          />
          <ThemedButton title="换肤"></ThemedButton>
        </Space>
        {/* <ColorPicker
          size="small"
          defaultValue={state.colorPrimary}
          onChange={onChange}
          showText
        /> */}
      </div>
    </div>
  );
}
