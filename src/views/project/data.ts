
import { filterTypeGroup } from "../../components/leftSearch/type";
export const toolsFilterList: Array<filterTypeGroup> = [
  {
    label: "办公工具",
    children: [
      {
        label: "文档处理",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "表格处理",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "演示制作",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "邮件管理",
        checked: true,
        count: 0,
        className: "job-style",
      },
    ],
  },
  {
    label: "文件类型",
    children: [
      {
        label: "pdf",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "png",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "gif",
        checked: true,
        count: 0,
        className: "job-style",
      },
      {
        label: "text",
        checked: true,
        count: 0,
        className: "job-style",
      },
    ],
  },
];
