import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

export default function ArticleList ({article}) {
        const articleCopy = {...article}
        return (
          <Link to={`/articles/${articleCopy.article_id}`}>
            <button className="article-list-button">
          <ul className={`article__list article-${articleCopy.topic}`}>
            <h2 className="list__title">{articleCopy.title}</h2>
            <p className="list__author">By: {articleCopy.author}</p>
            <p className="list__date">{formatDate(articleCopy.created_at)}</p>
            <h4 className="list__topic">{articleCopy.topic}</h4>
          </ul>
          </button>
          </Link>
        );
      
}