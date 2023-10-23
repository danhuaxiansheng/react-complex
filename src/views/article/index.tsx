import Layout from "@/views/layout/index";
import { ConditionProvider, } from "@/reducers/toolsPage/conditionContext";
import ArticleList from "@/views/article/articleList";
const articles = [
  {
    id: 1,
    title: '如何使用React构建个人博客',
    summary: '本文将介绍如何使用React构建个人博客的基本步骤。',
  },
  {
    id: 2,
    title: '深入理解TypeScript类型系统',
    summary: '本文将深入探讨TypeScript的类型系统以及其在项目中的应用。',
  },
  // 可以添加更多的文章
];

const handleArticleClick = (id: number) => {
  // 处理文章点击事件
  console.log(`点击了文章 ${id}`);
};

const PageMain = () => {
  return (<Layout><ArticleList articles={articles} onArticleClick={handleArticleClick} /></Layout>);
};

export default function Page() {
  return (
    <ConditionProvider>
      <PageMain></PageMain>
    </ConditionProvider>
  );
}