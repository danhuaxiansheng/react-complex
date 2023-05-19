import { SectionModel } from "@/type/SectionModel";
import "./style/index.scss";
// import { Tag } from "antd";

// function requireImage(src: string): string {
//   return require("@/assets/img/" + src);
// }

export default function Card({ title, desc, types }: SectionModel) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="menu-dot"></div>
      </div>
      <div className="job-card-title">{title}</div>
      <div className="job-card-subtitle">{desc}</div>
      <div className="job-card-buttons">
        <button className="search-buttons card-buttons">查看</button>
      </div>
    </div>
  );
}
