import { useContext, useMemo, useEffect } from "react";
import Layout from "@/views/layout/index";
import CardProject from "@/components/cardProject";
import LeftSearch from "@/components/LeftSearch/index";

import { ConditionContext, ConditionProvider } from "@/reducers/projectPage/conditionContext";
import { SectionModel } from "@/type/SectionModel";
import { cardList, filterList } from "./data";

const PageMain = () => {
  const { state } = useContext(ConditionContext);
  const filteredCardList = useMemo(() => {
    return cardList.filter((card: SectionModel) => {
      if (!card.types || card.types.length === 0) {
        return true;
      }
      const isShow = !card.types.some((type: string | number) => {
        const filterItem = state.find(d => d.value === type);
        if (!filterItem) {
          return false;
        }
        return filterItem.checked === false;
      });
      return isShow;
    });
  }, [state]);

  const leftFilter = useMemo(() => {
    return filterList.map(item => {
      return {
        ...item,
        children: item.children.map(d => {
          const filterItem = state.find(s => s.value === d.value);
          return {
            ...d,
            checked: filterItem ? filterItem.checked : true
          }
        })
      };
    });
  }, [state]);


  return (
    <Layout>
      <LeftSearch options={leftFilter} />
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">共 {filteredCardList.length} 条结果</div>
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