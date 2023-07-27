import { filterTypeGroup } from "@/components/LeftSearch/type";
import { cardList } from "./data";
import { ProjectTypeList, PlugList, LanguageList, CssList, PackList } from "@/type/ProjectModel";
import { SelectModel } from "@/type/SectionModel";

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
  { label: "前端框架", children: getChildrenTypes(ProjectTypeList) },
  { label: "开发语言", children: getChildrenTypes(LanguageList) },
  { label: "UI库", children: getChildrenTypes(PlugList) },
  { label: "CSS框架", children: getChildrenTypes(CssList) },
  { label: "打包方式", children: getChildrenTypes(PackList) },
];

