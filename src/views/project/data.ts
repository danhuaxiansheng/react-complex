
import { SectionModel } from "@/type/SectionModel";
import { filterTypeGroup } from "@/components/LeftSearch/type";
import { ProjectType, ProjectTypeList, PlugList, LanguageList, CssList, PackList, SelectModel } from "@/type/BaseModel";

/**
 * 当前所有项目集合
 */
export const cardList: SectionModel[] = [
  {
    title: "CETC前端开发框架",
    desc: "CETCXX系统的前端框架",
    previewSrc: ":3001",
    githubSrc: "Company-List/WenDao",
    imgSrc: ["CETC1.png", "CETC2.png", "CETC3.png"],
    types: [
      ProjectType.Vue2,
      ProjectType.TypeScript,
      ProjectType.WebPack,
      ProjectType.Sass,
      ProjectType.ElementUI,
    ],
  },
  // {
  //   title: "LD框架",
  //   desc: "使用企业微信扫码登录",
  //   previewSrc: ":3002",
  //   githubSrc: "Front-Store/Front-FrameWork",
  //   imgSrc: ["LD1.png", "LD2.png", "LD3.png", "LD4.png"],
  //   types: [
  //     ProjectType.Vue3,
  //     ProjectType.TypeScript,
  //     ProjectType.Sass,
  //     ProjectType.ElementPlus,
  //   ],
  // },
  {
    title: "视频网站",
    desc: "在线解析各大网站的vip视频。",
    previewSrc: ":3000/#/videoIndex",
    githubSrc: "vue3-books",
    imgSrc: ["video_1.png", "video_2.png", "video_3.png"],
    types: [ProjectType.TypeScript, ProjectType.Vue3],
  },
  {
    title: "小说网站",
    desc: "模仿起点中文网，在线解析vip章节。",
    githubSrc: "vue3-books",
    previewSrc: ":3000/#/bookIndex",
    imgSrc: ["books_1.png", "books_2.png"],
    types: [ProjectType.TypeScript, ProjectType.Vue3],
  },
  {
    title: "网络阵地系统",
    desc: "社区网站，可以共享学习资料，发布话题，评论点赞。",
    githubSrc: "vue3-position",
    previewSrc: ":3011",
    imgSrc: ["position_net_1.png"],
    types: [ProjectType.Vue3],
  },
  {
    title: "网络阵地系统后台",
    desc: "使用prisma框架+mysql",
    githubSrc: "vue3-position-nodejs",
    previewSrc: ":3010",
    imgSrc: ["position_1.png", "position_2.png"],
    types: [ProjectType.MySql, ProjectType.Vue3],
  },
  {
    title: "webpack-Demo",
    desc: "webpack示例章节",
    githubSrc: "webpack",
    imgSrc: ["webpack_1.png", "webpack_2.png"],
    types: [ProjectType.WebPack, ProjectType.Vue3],
  },
];

/**
 * 条件区
 */
export const filterList: Array<filterTypeGroup> = [
  { label: "前端框架", children: getChildrenTypes(ProjectTypeList) },
  { label: "开发语言", children: getChildrenTypes(LanguageList) },
  { label: "UI库", children: getChildrenTypes(PlugList) },
  { label: "CSS框架", children: getChildrenTypes(CssList) },
  { label: "打包方式", children: getChildrenTypes(PackList) },
];

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
