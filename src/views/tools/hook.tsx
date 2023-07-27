import { SectionModel, SelectModel } from "@/type/SectionModel";
import { filterTypeGroup } from "@/components/LeftSearch/type";

import { ToolTypeList, FileList, ProjectType } from "@/type/ToolsModel";

export const cardList: SectionModel[] = [
  {
    title: "PDF压缩",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: ":3001",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  }];

function getChildrenTypes(list: SelectModel[]) {
  return list.map(item => {
    return {
      label: item.title,
      value: item.value,
      count: cardList.filter(card => card.types?.includes(item.value)).length,
      checked: true,
    }
  })
}

export const filterList: Array<filterTypeGroup> = [
  { label: "办公工具", children: getChildrenTypes(ToolTypeList) },
  { label: "文件类型", children: getChildrenTypes(FileList) },
];

