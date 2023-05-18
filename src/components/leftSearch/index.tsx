
import SearchBlock from "@/components/searchBlock/index";
import { filterTypeGroup } from "./type";

import "./style/index.scss";

export default function Page({ options }: {
  options: Array<filterTypeGroup>
}) {
  return (
    <div className="search-type">
      <div className="search-header">过滤 </div>
      {options.map((item) => (
        <SearchBlock key={item.label} title={item.label} list={item.children}></SearchBlock>
      ))}
    </div>
  );
}
