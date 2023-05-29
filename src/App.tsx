import React, { useContext } from 'react'

import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';

import "antd/dist/reset.css";
import "./App.scss";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ToolsPage from "@/views/tools/index";
import ProjectPage from "@/views/project/index";

import { AppProvider } from "@/reducers/context";

const App: React.FC = () => {
  return <AppProvider >
    <ConfigProvider
    // theme={{
    //   token: {
    //     colorPrimary: '#00b96b',
    //   },
    // }}
    >
      <div>
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
    </ConfigProvider>
  </AppProvider>
}


export default App;
