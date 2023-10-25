import { SectionModel } from "@/type/SectionModel";
import { filterTypeGroup } from "@/components/LeftSearch/type";
import { ProjectType, ToolsGroup } from "@/type/ToolsModel";
import { getTypeCount } from "@/utils/utils";

export const cardList: SectionModel[] = [
  {
    title: "音频剪辑",
    desc: "在线修改任何音频文件",
    previewSrc: "https://mp3cut.net/tw/",
    imgSrc: [],
    types: [ProjectType[ProjectType.演示制作], ProjectType[ProjectType.video]],
  },
  {
    title: "GIF剪辑",
    desc: "图片转gif、视频转gif、gif优化",
    previewSrc: "https://ezgif.com/",
    imgSrc: [],
    types: [ProjectType[ProjectType.图像处理], ProjectType[ProjectType.gif]],
  },
  {
    title: "图片剪辑",
    desc: "图像调整、格式转换、压缩",
    previewSrc: "https://new.express.adobe.com/",
    imgSrc: [],
    types: [ProjectType[ProjectType.图像处理], ProjectType[ProjectType.img]],
  },
  // {
  //   title: "PDF压缩",
  //   desc: "用于PDF文件压缩，可以自定义压缩比例",
  //   previewSrc: ":3001",
  //   imgSrc: [],
  //   types: [ProjectType.文档处理, ProjectType.pdf],
  // },
  {
    title: "一键抠图",
    desc: "上传一张图片以消除背景",
    previewSrc: "https://www.remove.bg/zh/upload",
    imgSrc: [],
    types: [ProjectType[ProjectType.图像处理], ProjectType[ProjectType.img]],
  },
  {
    title: "开发工具",
    desc: "集合了非常多的工具函数",
    previewSrc: "https://it-tools.tech/",
    imgSrc: [],
    types: [ProjectType[ProjectType.文档处理], ProjectType[ProjectType.pdf]],
  },
];

export const filterList: Array<filterTypeGroup> = getTypeCount(ToolsGroup, cardList);
