import bgImage from "@/static/img/footer/icon-police.png";

export default function Footer() {
  return <div className="footer-panle">
    <img src={bgImage} />
    网站备案号
    <a href="https://beian.miit.gov.cn/" target="_blank">
      （蜀ICP备2022009654号）</a
    >
  </div>
}