import Layout from "@/views/layout/index";
import LeftSearch from "@/components/LeftSearch/index";
import Card from "@/components/card/index";
import { useContext } from "react";
import { cardList, filterList } from "./hook";
import {
  ConditionContext,
  ConditionProvider,
} from "@/reducers/toolsPage/conditionContext";
import { SectionModel } from "@/type/SectionModel";

const PageMain = () => {
  const { state } = useContext(ConditionContext);
  const filteredCardList = cardList.filter((card: SectionModel) => {
    if (!card.types || card.types.length === 0) {
      // 如果 card.types 不存在或为空数组，则保留该 card 对象
      return true;
    }
    // 检查 card.types 中的每个类型是否在 state 的筛选列表中
    const isShow = !card.types.some((type: string | number) => {
      const filterItem = state.find((d) => d.value === type);
      // 如果在筛选列表中找不到与当前类型相对应的项，保留该 card 对象
      if (!filterItem) {
        return false;
      }
      // 根据 filterItem 的 checked 属性来决定是否保留该 card 对象
      return filterItem.checked === false;
    });
    return isShow;
  });

  const leftFilter = filterList.map((item) => {
    return {
      ...item,
      children: item.children.map((d) => {
        const filterItem = state.find((s) => s.value === d.value);
        return {
          ...d,
          checked: filterItem ? filterItem.checked : true,
        };
      }),
    };
  });

  return (
    <Layout>
      <LeftSearch options={leftFilter} />
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">共 {cardList.length} 条结果</div>
          <div className="searched-sort">
            排序: <span className="post-time">最新发布</span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        <div className="job-cards">
          {filteredCardList.map((item) => (
            <Card key={item.title} {...item}></Card>
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
