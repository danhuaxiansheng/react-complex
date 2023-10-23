import { SectionModel, SelectModel } from "@/type/SectionModel";
import { filterTypeGroup } from "@/components/LeftSearch/type";

import { ToolTypeList, FileList, ProjectType } from "@/type/ToolsModel";

export const cardList: SectionModel[] = [
  {
    title: "3D卡片",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/3D-Card/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "光效卡片",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Card-Hover-Effect/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "悬停卡片",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Card-Hover-Interactions/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "404页面",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/404-Error-Page/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  // {
  //   title: "404页面",
  //   desc: "用于PDF文件压缩，可以自定义压缩比例",
  //   previewSrc: "http://47.109.85.136:4000/404Page/index.html",
  //   githubSrc: "Company-List/WenDao",
  //   imgSrc: [],
  //   types: [ProjectType.文档处理, ProjectType.pdf],
  // },
  {
    title: "登录模版",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Login-Html/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "星空背景",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Personal-Website/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "雪花背景",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Snow/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "标签页",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Tab-Bar/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "上传弹出框",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Upload-Modal/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },

  {
    title: "渐变文字",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/The-Aurora/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
  {
    title: "3d头像",
    desc: "用于PDF文件压缩，可以自定义压缩比例",
    previewSrc: "http://47.109.85.136:4000/Pop-Out-Effect/index.html",
    githubSrc: "Company-List/WenDao",
    imgSrc: [],
    types: [ProjectType.文档处理, ProjectType.pdf],
  },
];

function getChildrenTypes(list: SelectModel[]) {
  return list.map(item => ({
    label: item.title,
    value: item.value,
    count: cardList.filter(card => card.types?.includes(item.value)).length,
    checked: true,
  }));
}

export const filterList: Array<filterTypeGroup> = [
  { label: "办公工具", children: getChildrenTypes(ToolTypeList) },
  { label: "文件类型", children: getChildrenTypes(FileList) },
];