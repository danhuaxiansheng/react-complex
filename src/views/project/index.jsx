import { useContext } from "react";

import Layout from "@/views/layout/index";
import LeftSearch from "@/components/leftSearch/index";
import CardProject from "@/components/cardProject/index";

import {
  ConditionProvider,
  ConditionContext,
} from "@/reducers/conditionContext";

import hookUtils from "./hook";

const { filterList, cardList } = hookUtils();

function PageMain() {
  const { state } = useContext(ConditionContext);
  var dataList = cardList.filter((d) =>
    d.types.some((item) => state.includes(item))
  );
  return (
    <Layout>
      <LeftSearch options={filterList}></LeftSearch>
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">共 {cardList.length} 条结果</div>
          <div className="searched-sort">
            排序: <span className="post-time">最新发布</span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        <div className="job-cards">
          {dataList.map((item) => (
            <CardProject key={item.title} {...item}></CardProject>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default function Page() {
  return (
    <ConditionProvider>
      <PageMain></PageMain>
    </ConditionProvider>
  );
}
