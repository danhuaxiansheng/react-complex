import { filterTypeGroup } from "@/components/leftSearch/type";
import { filterList, data } from "./data";

export default function Hook() {
  const toolsFilterList = filterList.map((filter: filterTypeGroup): filterTypeGroup => {
    return {
      label: filter.label,
      children: filter.children.map(item => {
        item.count = data.filter(d => d.tags.includes(item.label)).length;
        return item;
      })
    }
  })

  return {
    toolsFilterList,
    data
  };
}
