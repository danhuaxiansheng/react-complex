import { filterTypeGroup } from "@/components/LeftSearch/type";

/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export enum ProjectType {
  图像处理,
  演示制作,
  表格处理,
  文档处理,
  邮件管理,

  img,
  pdf,
  png,
  gif,
  text,
  excel,
  word,
  video
}

export const ToolsGroup: Array<filterTypeGroup> = [
  {
    label: "办公工具",
    children: [
      {
        label: ProjectType[ProjectType.图像处理],
        value: ProjectType.图像处理,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.演示制作],
        value: ProjectType.演示制作,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.表格处理],
        value: ProjectType.表格处理,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.文档处理],
        value: ProjectType.文档处理,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.邮件管理],
        value: ProjectType.邮件管理,
        checked: true,
        count: 0,
      },
    ],
  },
  {
    label: "文件类型",
    children: [
      {
        label: ProjectType[ProjectType.img],
        value: ProjectType.img,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.pdf],
        value: ProjectType.pdf,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.png],
        value: ProjectType.png,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.gif],
        value: ProjectType.gif,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.text],
        value: ProjectType.text,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.excel],
        value: ProjectType.excel,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.word],
        value: ProjectType.word,
        checked: true,
        count: 0,
      },
      {
        label: ProjectType[ProjectType.video],
        value: ProjectType.video,
        checked: true,
        count: 0,
      },
    ],
  },
]
