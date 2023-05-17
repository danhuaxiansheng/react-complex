import { useId } from "react";

import SearchBlock from "../searchBlock/index";

import "./style/index.scss";

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
  ];

  const list2 = [
    {
      label: "pdf",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "png",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "gif",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "text",
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
      <SearchBlock title="文件类型" list={list2}></SearchBlock>
    </div>
  );
}
