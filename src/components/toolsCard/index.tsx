import { SectionModel } from "@/type/SectionModel";
import "./style/index.scss";
import { Tag } from "antd";
export default function Card({ title, desc, icon, previewSrc, types }: SectionModel) {
  const openDetails = () => {
    window.open(previewSrc);
  };
  return (
    <div className="tools-item" onClick={openDetails}>
      <div className="tools-item-header" style={{ 'justifyContent': 'left' }}>
        {icon}
        <div className="tools-item-title">{title}</div>
      </div>
      <div className="tools-item-subtitle">{desc}</div>
      <div className="tools-tags">
        {types?.map((item) => (
          <Tag key={item} bordered={false} className="tag-item">
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
}
