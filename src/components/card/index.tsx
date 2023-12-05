import { SectionModel } from "@/type/SectionModel";
import "./style/index.scss";
import { Tag } from "antd";
export default function Card({ title, desc, icon, previewSrc, types }: SectionModel) {
  const openDetails = () => {
    window.open(previewSrc);
  };
  return (
    <div className="result-item" onClick={openDetails}>
      <div className="result-item-header" style={{ 'justifyContent': 'left' }}>
        {icon}
        <div className="result-item-title">{title}</div>
        {/* <div className="menu-dot"></div> */}
      </div>
      <div className="result-item-subtitle">{desc}</div>
      <div className="result-tags">
        {types?.map((item) => (
          <Tag key={item} bordered={false} className="tag-item">
            {item}
          </Tag>
        ))}
      </div>
      {/* <div className="result-item-buttons">
        <button className="btn card-buttons" onClick={openDetails}>
          查看
        </button>
      </div> */}
    </div>
  );
}
