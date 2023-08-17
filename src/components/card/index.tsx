import { SectionModel } from "@/type/SectionModel";
import "./style/index.scss";
import { Tag } from "antd";
export default function Card({ title, desc, imgSrc, previewSrc, githubSrc, types }: SectionModel) {
  const openDetails = () => {
    window.open(previewSrc);
  };
  return (
    <div className="job-card">
      <div className="job-card-header">
        <svg
          viewBox="0 -13 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: "#2e2882" }}
        >
          <g fill="#feb0a5">
            <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
            <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
          </g>
          <path
            d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
            fill="#feb0a5"
          />
        </svg>
        <div className="menu-dot"></div>
      </div>
      <div className="job-card-title">{title}</div>
      <div className="job-card-subtitle">{desc}</div>
      <div className="job-detail-buttons">
        {types?.map((item) => (
          <Tag key={item} bordered={false} className="detail-button">
            {item}
          </Tag>
        ))}
      </div>
      <div className="job-card-buttons">
        <button className="search-buttons card-buttons" onClick={openDetails}>
          查看
        </button>
      </div>
    </div>
  );
}
