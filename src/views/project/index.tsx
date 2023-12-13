import { useContext, useMemo } from "react";
import Layout from "@/views/layout/index";
import IframeCard from "@/components/iframeCard/index";
import LeftSearch from "@/components/LeftSearch/index";

import { ConditionContext, ConditionProvider } from "@/reducers/projectPage/conditionContext";
import { SectionModel } from "@/type/SectionModel";
import { cardList, filterList } from "./hook";

const PageMain = () => {
  const { state } = useContext(ConditionContext);
  const filteredCardList = useMemo(() => {
    return cardList.filter((card: SectionModel) => {
      if (!card.types || card.types.length === 0) {
        return true;
      }
      const isShow = !card.types.some((type) => {
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

  const style = { '--num-columns': 3 } as any;
  return (
    <Layout>
      <div className="search-content-container">
        <LeftSearch options={leftFilter} context={ConditionContext} />
        <div className="content-list">
          <div className="result-header">
            <div className="searched-show">共 {filteredCardList.length} 条结果</div>
            <div className="sort-content">
              排序: <span className="post-time">最新发布</span>
              <span className="menu-icon">▼</span>
            </div>
          </div>
          <div className="result-content" style={style}>
            {filteredCardList.map((item) => (
              <IframeCard key={item.title} {...item} />
            ))}
          </div>
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