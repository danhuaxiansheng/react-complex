
import { filterTypeGroup } from "../../components/leftSearch/type";
export const filterList: Array<filterTypeGroup> = [
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
]

export const data: Array<any> = [
  {
    label: "PDF压缩",
    describe: "用于PDF文件压缩，可以自定义压缩比例",
    tags: ["文档处理", "pdf"]
  },
  {
    label: "其他1",
    describe: "用于PDF文件压缩，可以自定义压缩比例",
    tags: ["表格处理", "text"]
  },
  {
    label: "其他2",
    describe: "用于PDF文件压缩，可以自定义压缩比例",
    tags: ["邮件管理", "gif"]
  },
  {
    label: "其他3",
    describe: "用于PDF文件压缩，可以自定义压缩比例",
    tags: ["演示制作", "text"]
  },
]