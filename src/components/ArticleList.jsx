import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

export default function ArticleList ({articles}) {

return articles.map((article) => {
        const articleCopy = { ...article };
        return (
          <Link to={`/articles/${articleCopy.article_id}`}>
            <button className="article-list-button">
          <ul key={articleCopy.article_id} className={`article__list article-${articleCopy.topic}`}>
            <h2 className="list__title">{articleCopy.title}</h2>
            <h4 className="list__topic">{articleCopy.topic}</h4>
            <p className="list__author">By: {articleCopy.author}</p>
            <p className="list__date">{formatDate(articleCopy.created_at)}</p>
          </ul>
          </button>
          </Link>
        );
      });
}