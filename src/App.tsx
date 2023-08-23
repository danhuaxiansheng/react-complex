import React, { useContext } from 'react'

import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';

import "antd/dist/reset.css";
import "./App.scss";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ToolsPage from "@/views/tools/index";
import ProjectPage from "@/views/project/index";
import ComponentsPage from "@/views/components/index";


import { AppProvider, AppContext } from "@/reducers/themeContext";

function Main() {
  const { state } = useContext(AppContext);
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: state.colorPrimary,
      },
    }}
  >
    <div className={state.theme + '-mode'}>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<ToolsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </main>
      <footer style={{ display: "none" }}>
        <Footer></Footer>
      </footer>
    </div>
  </ConfigProvider >
}

const App: React.FC = () => {
  return <AppProvider><Main></Main></AppProvider>
}

export default App;
