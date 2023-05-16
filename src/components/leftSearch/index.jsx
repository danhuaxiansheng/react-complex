import { useId } from "react";

import SearchBlock from "../searchBlock/index";

export default function Page() {
  const list = [
    {
      label: "工具1",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "工具2",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "工具3",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "工具4",
      checked: true,
      count: 34,
      id: useId(),
      className: "job-style",
    },
    {
      label: "工具5",
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
      <div className="searched-show">过滤 </div>
      <SearchBlock title="Type of Employment" list={list}></SearchBlock>
    </div>
  );
}
