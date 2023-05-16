export default function Page() {
  return (
    <div className="search-menu">
      <div className="search-bar">
        <input type="text" className="search-box" />
        <div className="search item">
          Product Designer
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
        <div className="search item">
          UI Designer
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      </div>
      <button className="search-button">搜索</button>
    </div>
  );
}
