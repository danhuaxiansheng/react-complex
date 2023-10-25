import { filterType } from "@/components/LeftSearch/type";

/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月12日19:49:43
 * @LastEditTime: 2022年7月12日19:49:59
 */
export interface SectionModel {
  // 名称
  title?: string;
  // 描述
  desc?: string;
  // 项目类型
  types?: Array<filterType['label']>;
  // 预览地址
  previewSrc?: string;
  // 图片途径
  imgSrc: Array<string>;
  // github地址
  githubSrc?: string;
}


/*
 * @Description:基础下拉类型
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export interface SelectModel {
  // 名称
  title: string;
  // 值
  value: number | string;
}