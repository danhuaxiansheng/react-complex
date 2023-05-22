import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';

import "antd/dist/reset.css";
import "./App.scss";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ToolsPage from "@/views/tools/index";
import ProjectPage from "@/views/project/index";


const App: React.FC = () => (
  <ConfigProvider
  // theme={{
  //   token: {
  //     colorPrimary: '#00b96b',
  //   },
  // }}
  >
    <div className="App">
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
)

export default App;
