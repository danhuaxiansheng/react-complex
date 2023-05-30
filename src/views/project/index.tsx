import { useContext } from "react";

import Layout from "@/views/layout/index";
import CardProject from "@/components/cardProject";

import LeftSearch from "@/components/LeftSearch/index";

import {
  ConditionContext,
  ConditionProvider,
} from "@/reducers/conditionContext";

import { cardList, filterList } from "./data";
import { SectionModel } from "@/type/SectionModel";
import { ProjectType } from "@/type/BaseModel";

const PageMain = () => {
  const { state } = useContext(ConditionContext);

  const filteredCardList = cardList.filter((card: SectionModel) =>
    card.types && card.types?.some((type: ProjectType) => state.includes(type))
  );

  return (
    <Layout>
      <LeftSearch options={filterList} />
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">共 {cardList.length} 条结果</div>
          <div className="searched-sort">
            排序: <span className="post-time">最新发布</span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        <div className="job-cards">
          {filteredCardList.map((card) => (
            <CardProject key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default function Page() {
  return (
    <ConditionProvider>
      <PageMain></PageMain>
    </ConditionProvider>
  );
}
