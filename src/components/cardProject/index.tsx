import { SectionModel } from "@/type/SectionModel";
import Card3D from "@/components/3dCard/index"
import "./style/index.scss";

export default function CardProject({ title, desc, imgSrc }: SectionModel) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <Card3D imgSrc={imgSrc}></Card3D>
      </div>
      <div className="job-card-title">{title}</div>
      <div className="job-card-subtitle">{desc}</div>
      <div className="job-card-buttons">
        <button className="search-buttons card-buttons">查看</button>
      </div>
    </div>
  );
}
