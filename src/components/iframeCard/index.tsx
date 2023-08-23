import { SectionModel } from '@/type/SectionModel';
import './style/index.scss';

export default function Card({ title, desc, imgSrc, previewSrc, githubSrc, types }: SectionModel) {
  const openDetails = () => {
    window.open(previewSrc)
  }
  return (
    <div className="preview-card">
      <article className="content-item" onClick={openDetails}>
        <div className="iframe-wrapper">
          <iframe src={previewSrc} frameBorder="0" loading="lazy" scrolling="no" className="iframe-item"></iframe>
        </div>
        <div className="bottom-item">
          <a href={previewSrc} target="_blank">{title}</a>
        </div>
      </article>
    </div>
  );
}