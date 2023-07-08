import Layout from "@/views/layout/index";



const PageMain = () => {
  const list = ["办公自动化原理及应用.pdf",
    "管理系统中计算机应用.pdf",
    "马克思主义基本原理概论.pdf",
    "信息经济学.pdf",
    "信息系统开发.pdf",
    "中国近现代史纲要.pdf"];

  function handleClick(key: string) {

    window.open('./')
  }


  return (
    <Layout>
      {list.map(d => {
        return <a href={"/file/" + d} target="_blank">{d}</a>
      })}
    </Layout>
  );
};

export default function Page() {
  return (
    <PageMain></PageMain>
  );
}
