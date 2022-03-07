import formatDate from "../utils/formatDate";

export default function ArticleList ({articles}) {

return articles.map((article) => {
        const articleCopy = { ...article };
        return (
          <ul key={articleCopy.article_id} className="article__list">
            <h2 className="list__title">{articleCopy.title}</h2>
            <h4 className="list__topic">{articleCopy.topic}</h4>
            <p className="list__author">By: {articleCopy.author}</p>
            <p className="list__date">{formatDate(articleCopy.created_at)}</p>
          </ul>
        );
      });
}