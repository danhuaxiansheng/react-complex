import { Routes, Route } from "react-router-dom";

import Header from "./components/header/index";
import ToolsPage from "./views/tools/index";
import ProjectPage from "./views/project/index";

import "./App.scss";
import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<ToolsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/components" element={<ProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
