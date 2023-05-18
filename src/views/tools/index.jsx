import Layout from "../layout/index";
import LeftSearch from "../../components/leftSearch/index";
import Card from "../../components/card/index";

import hookUtils from "./hook";

const { toolsFilterList, data } = hookUtils();

export default function Page() {
  return (
    <Layout>
      <LeftSearch options={toolsFilterList}></LeftSearch>
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">共 {data.length} 条结果</div>
          <div className="searched-sort">
            排序: <span className="post-time">最新发布</span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        <div className="job-cards">
          {data.map((item) => (
            <Card key={item.label} {...item}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
