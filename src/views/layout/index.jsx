// import SearchBar from "../../components/searchBar/index";

import "./style/index.scss";

export default function Page({ children }) {
  return (
    <div className="job">
      <div className="wrapper">
        {/* <SearchBar></SearchBar> */}
        <div className="main-container">{children}</div>
      </div>
    </div>
  );
}
