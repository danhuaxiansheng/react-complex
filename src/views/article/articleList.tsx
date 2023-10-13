import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'





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
            <h2 className='contentItem-title'>
              <a>{article.title}</a>
            </h2>
            <div className='richContent is-collapsed'>
              <span>
                <div className='richContent-inner'>
                  <div className='richContent-inner-block'>
                    <span className='richText'>
                      {article.summary}
                    </span>
                  </div>
                  <Button type="text" className='contentItem-more'>阅读全文</Button>
                </div>
              </span>

              <div className='contentItem-actions'>
                <span>
                  <Button className='button voteButton'>赞同 406</Button>
                  <Button className='button voteButton'>反对</Button>
                </span>
              </div>
            </div>

            <button>评论</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;