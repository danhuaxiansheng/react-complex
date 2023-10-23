import { SectionModel } from "@/type/SectionModel";
import Card3D from "@/components/3dCard/index"
import { Button } from 'antd';
import "./style/index.scss";

export default function CardProject({ title, desc, imgSrc, previewSrc, githubSrc }: SectionModel) {
  const openGithub = () => {
    window.open("https://github.com/danhuaxiansheng/" + githubSrc)
  }

  return (
    <div className="result-item">
      <div className="result-item-header">
        <Card3D imgSrc={imgSrc}></Card3D>
      </div>
      <div className="result-item-title">{title}</div>
      <div className="result-item-subtitle">{desc}</div>
      <div className="result-item-buttons">
        <Button type="primary" onClick={openGithub}>查看</Button>
      </div>
    </div>
  );
}
