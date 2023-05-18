/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */

/*
 * @Description:文章内容原型
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export interface ArticleModel {
  /**id */
  id: string | number;
  /**标题 */
  title?: string;
  /**内容块 */
  content?: string;
  /**创建人 */
  createid?: string | number;
  /**创建时间 */
  createtime?: string | number;
  /**阅读次数 */
  readtimes?: string | number;
  /**点赞次数 */
  goodtimes?: string | number;
  // 踩次数
  badtimes?: string | number;
  /**是否有信息 */
  hasmessage?: string | number;
  /**重要级 */
  importance?: string | number;
  /**语言类型 */
  languageid?: string | number;
  /**文章状态 */
  status?: string | number;
  /**类型ID */
  typeid?: string | number;

  /**界面需要 */
  /**是否展开所有内容 */
  showMore?: boolean;
}
