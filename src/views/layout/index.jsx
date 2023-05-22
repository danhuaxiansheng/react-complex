// import SearchBar from "../../components/searchBar/index";

import "./style/index.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="main-container">{children}</div>
    </div>
  );
}
