import React from 'react';
import { Button, Divider } from 'antd'
import { CaretUpOutlined, CaretDownOutlined, AliwangwangOutlined, DownOutlined } from '@ant-design/icons';

import './style/articleList.scss';
interface Article {
  id: number;
  title: string;
  content?: string;
  summary?: string;
  author?: string;
  publishedDate?: string;
}

interface Props {
  articles: Article[];
  onArticleClick: (id: number) => void;
}

const ArticleList: React.FC<Props> = ({ articles, onArticleClick }) => {
  return (
    <div className='article-container'>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2 className='contentItem-title hover'>
              <a>{article.title}</a>
            </h2>
            <div className='richContent is-collapsed'>
              <span>
                <div className='richContent-inner'>
                  <span className='richContent-inner-block'>
                    {/* <span className='richText'> */}
                    {article.summary}
                    {/* </span> */}
                  </span>
                  <Button type="text" className='contentItem-more'>阅读全文<DownOutlined /></Button>
                </div>
              </span>
              <div className='contentItem-actions'>
                <span>
                  <Button icon={<CaretUpOutlined />} className='voteButton' >赞同 406</Button>
                  <Button icon={<CaretDownOutlined />} className='voteButton voteButton-down' />
                </span>
                <Button type="text" icon={<AliwangwangOutlined />} className='contentItem-action' >51 条评论</Button>
              </div>
            </div>
            <Divider />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;