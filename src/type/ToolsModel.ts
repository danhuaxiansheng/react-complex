import { filterTypeGroup } from "@/components/LeftSearch/type";
import { SelectModel } from "./SectionModel";



/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export enum ProjectType {
  文档处理,
  表格处理,
  演示制作,
  邮件管理,

  pdf,
  png,
  gif,
  text,
  excel,
  word,
}

export const ToolsGroup: Array<filterTypeGroup> = [
  {
    label: "办公工具",
    children: [
      {
        label: ProjectType.文档处理,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.表格处理,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.演示制作,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.邮件管理,
        checked: true,
        count: 0,
      },
    ],
  },
  {
    label: "文件类型",
    children: [
      {
        label: ProjectType.pdf,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.png,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.gif,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.text,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.excel,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType.word,
        checked: true,
        count: 0,
      },
    ],
  },
]

/*
 * @Description工具类型列表
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export const ToolTypeList: Array<SelectModel> = [
  { title: "文档处理", value: ProjectType.文档处理 },
  { title: "表格处理", value: ProjectType.表格处理 },
  { title: "演示制作", value: ProjectType.演示制作 },
  { title: "邮件管理", value: ProjectType.邮件管理 },
];

export const FileList: Array<SelectModel> = [
  {
    title: "pdf",
    value: ProjectType.pdf,
  },
  {
    title: "png",
    value: ProjectType.png,
  },
  {
    title: "gif",
    value: ProjectType.gif,
  },
  {
    title: "text",
    value: ProjectType.text,
  },
  {
    title: "excel",
    value: ProjectType.excel,
  },
  {
    title: "word",
    value: ProjectType.word,
  },
];