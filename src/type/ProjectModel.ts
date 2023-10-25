import { filterTypeGroup } from "@/components/LeftSearch/type";

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

export const filterGroup: Array<filterTypeGroup> = [
  {
    label: "前端框架", children: [
      { label: ProjectType[ProjectType.Vue2], value: ProjectType.Vue2, checked: true, count: 0, },
      { label: ProjectType[ProjectType.Vue3], value: ProjectType.Vue3, checked: true, count: 0, },
      { label: ProjectType[ProjectType.React], value: ProjectType.React, checked: true, count: 0, },
      { label: ProjectType[ProjectType.ASP_NetCore], value: ProjectType.ASP_NetCore, checked: true, count: 0, },
    ]
  },
  {
    label: "开发语言", children: [
      { label: ProjectType[ProjectType.JavaScript], value: ProjectType.JavaScript, checked: true, count: 0, },
      { label: ProjectType[ProjectType.TypeScript], value: ProjectType.TypeScript, checked: true, count: 0, },
    ]
  },
  {
    label: "UI库", children: [
      { label: ProjectType[ProjectType.AntDesignVue], value: ProjectType.AntDesignVue, checked: true, count: 0, },
      { label: ProjectType[ProjectType.ElementUI], value: ProjectType.ElementUI, checked: true, count: 0, },
      { label: ProjectType[ProjectType.ElementPlus], value: ProjectType.ElementPlus, checked: true, count: 0, },
    ]
  },
  {
    label: "CSS框架", children: [
      { label: ProjectType[ProjectType.Sass], value: ProjectType.Sass, checked: true, count: 0, },
      { label: ProjectType[ProjectType.Less], value: ProjectType.Less, checked: true, count: 0, },
      { label: ProjectType[ProjectType.Css], value: ProjectType.Css, checked: true, count: 0, },
    ]
  },
  {
    label: "构建工具", children: [
      { label: ProjectType[ProjectType.WebPack], value: ProjectType.WebPack, checked: true, count: 0, },
      { label: ProjectType[ProjectType.Vite], value: ProjectType.Vite, checked: true, count: 0, },
    ]
  },
]

