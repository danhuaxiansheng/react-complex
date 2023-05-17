import { Input } from "antd";
import "./style/index.scss";
const { Search } = Input;

function onSearch() {}

export default function Page() {
  return (
    <Search
      placeholder="请输入关键字"
      allowClear
      enterButton="搜索"
      className="search-menu"
      size="large"
      onSearch={onSearch}
    />
  );
}
