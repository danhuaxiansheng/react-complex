import { filterTypeGroup } from "@/components/LeftSearch/type";
import { filterGroup } from "@/type/ProjectModel";
import { getTypeCount } from "@/utils/utils";
import { SectionModel } from "@/type/SectionModel";
import { ProjectType } from "@/type/ProjectModel";

/**
 * 当前所有项目集合
 */
export const cardList: SectionModel[] = [
  {
    title: "CETC前端开发框架",
    desc: "CETCXX系统的前端框架",
    previewSrc: "",
    githubSrc: "Company-List/WenDao",
    imgSrc: ["CETC1.png", "CETC2.png", "CETC3.png"],
    types: [
      ProjectType.Vue2,
      ProjectType.TypeScript,
      ProjectType.ElementUI,
      ProjectType.Sass,
      ProjectType.WebPack,
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
    previewSrc: "",
    githubSrc: "vue3-books",
    imgSrc: ["video_1.png", "video_2.png", "video_3.png"],
    types: [
      ProjectType.Vue3,
      ProjectType.JavaScript,
      ProjectType.ElementUI,
      ProjectType.Less,
      ProjectType.WebPack],
  },
  {
    title: "小说网站",
    desc: "模仿起点中文网，在线解析vip章节。",
    githubSrc: "vue3-books",
    previewSrc: "",
    imgSrc: ["books_1.png", "books_2.png"],
    types: [
      ProjectType.Vue3,
      ProjectType.JavaScript,
      ProjectType.ElementUI,
      ProjectType.Less,
      ProjectType.Vite
    ],
  },
  {
    title: "网络阵地系统",
    desc: "社区网站，可以共享学习资料，发布话题，评论点赞。",
    githubSrc: "vue3-position",
    previewSrc: "",
    imgSrc: ["position_net_1.png"],
    types: [
      ProjectType.Vue3,
      ProjectType.JavaScript,
      ProjectType.AntDesignVue,
      ProjectType.Less,
      ProjectType.Vite],
  },
  {
    title: "网络阵地系统后台",
    desc: "使用prisma框架+mysql",
    githubSrc: "vue3-position-nodejs",
    previewSrc: "",
    imgSrc: ["position_1.png", "position_2.png"],
    types: [
      ProjectType.JavaScript,
      ProjectType.Vue3,
      ProjectType.MySql,
      ProjectType.WebPack,
    ],
  },
  {
    title: "webpack-Demo",
    desc: "webpack示例章节",
    githubSrc: "webpack",
    imgSrc: ["webpack_1.png", "webpack_2.png"],
    types: [
      ProjectType.Vue3,
      ProjectType.JavaScript,
      ProjectType.WebPack,
    ],
  },
];


export const filterList: Array<filterTypeGroup> = getTypeCount(filterGroup, cardList);