import { filterType, filterTypeGroup } from "@/components/LeftSearch/type";
import { SelectModel, SectionModel } from "@/type/SectionModel";


// 获取左侧筛选栏中，每个类型对应的数据总数
export function getChildrenTypes(list: SelectModel[], dataList: SectionModel[]) {
  return list.map(item => ({
    label: item.title,
    value: item.value,
    count: dataList.filter(card => card.types?.includes(item.value)).length,
    checked: true,
  }));
}

// 获取左侧筛选栏中，每个类型对应的数据总数
export function getTypeCount(filterList: filterTypeGroup[], dataList: SectionModel[]) {
  return filterList.map((item: filterTypeGroup) => {
    return {
      ...item,
      children: item.children.map((child: filterType) => {
        // 防止数据被其他地方覆盖，每次返回新的对象
        return {
          ...child,
          count: dataList.filter(card => card.types?.includes(child.label)).length
        }
      })
    }
  })


}
