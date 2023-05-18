import { ProjectType } from "./BaseModel";

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
  types?: Array<ProjectType>;
  // 预览地址
  previewSrc?: string;
  // 图片途径
  imgSrc: Array<string>;
  // github地址
  githubSrc?: string;
}
