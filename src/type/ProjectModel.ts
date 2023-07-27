import { SelectModel } from "./SectionModel";

/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export enum ProjectType {
  // 前端基础
  JavaScript,
  TypeScript,

  // 前端框架
  Vue2,
  Vue3,
  React,

  // CSS框架
  Css,
  Sass,
  Less,

  // UI库
  AntDesignVue,
  ElementPlus,
  ElementUI,

  // 代码打包工具
  WebPack,
  Vite,

  // 后端服务器框架
  ASP_NetCore,
  JSP,
  Python,

  // 数据库
  MySql,
}

/*
 * @Description:项目类型列表
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export const ProjectTypeList: Array<SelectModel> = [
  { title: "Vue2", value: ProjectType.Vue2 },
  { title: "Vue3", value: ProjectType.Vue3 },
  { title: "React", value: ProjectType.React },
  { title: "Asp", value: ProjectType.ASP_NetCore },
];

export const PlugList: Array<SelectModel> = [
  { title: "AntDesignVue", value: ProjectType.AntDesignVue },
  { title: "ElementUI", value: ProjectType.ElementUI },
  { title: "ElementPlus", value: ProjectType.ElementPlus },
];

export const LanguageList: Array<SelectModel> = [
  { title: "JavaScript", value: ProjectType.JavaScript },
  { title: "TypeScript", value: ProjectType.TypeScript },
];

export const CssList: Array<SelectModel> = [
  { title: "Sass", value: ProjectType.Sass },
  { title: "Less", value: ProjectType.Less },
  { title: "Css", value: ProjectType.Css },
];

export const PackList: Array<SelectModel> = [
  { title: "WebPack", value: ProjectType.WebPack },
  { title: "Vite", value: ProjectType.Vite },
];


