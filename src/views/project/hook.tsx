import { filterTypeGroup } from "@/components/leftSearch/type";
import { cardList } from "./data";

import { ProjectTypeList } from "@/type/BaseModel";

export default function Hook() {
  const filterList: Array<filterTypeGroup> = [{
    label: "开发语言",
    children: ProjectTypeList.map(item => {
      return {
        label: item.title,
        count: cardList.filter(card => card.types?.includes(item.value)).length,
        checked: true,
      }
    })
  }];
  return {
    filterList,
    cardList
  };
}
