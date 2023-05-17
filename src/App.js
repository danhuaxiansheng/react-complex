import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/index";

import ToolsPage from "./views/tools/index";
import ProjectPage from "./views/project/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<ToolsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/components" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function About() {
  return <div>这是About</div>;
}

export default App;
