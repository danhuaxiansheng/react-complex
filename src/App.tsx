import React, { useContext } from 'react'

import { Routes, Route } from "react-router-dom";
// import { ConfigProvider } from 'antd';

import "antd/dist/reset.css";
import "./App.scss";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ToolsPage from "@/views/tools/index";
import ProjectPage from "@/views/project/index";

import { AppProvider, AppContext } from "@/reducers/themeContext";

function Main() {
  const { state } = useContext(AppContext);
  return <div className={state.theme + '-mode'}>
    <Header></Header>
    <main>
      <Routes>
        <Route path="/" element={<ToolsPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/components" element={<ProjectPage />} />
      </Routes>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
}

const App: React.FC = () => {
  return <AppProvider ><Main></Main></AppProvider>
}

export default App;
