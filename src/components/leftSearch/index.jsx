import { useId } from "react";

import SearchBlock from "../searchBlock/index";

export default function Page() {
  const list = [
    {
      label: "文档处理",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "表格处理",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "演示制作",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "邮件管理",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "zip",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "工具6",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
  ];

  return (
    <div className="search-type">
      <div className="search-header">过滤 </div>
      <SearchBlock title="办公工具" list={list}></SearchBlock>
      <SearchBlock title="工具类型" list={list}></SearchBlock>
    </div>
  );
}
