import { useEffect, useState } from "react";
import * as api from "../utils/api";
import formatDate from "../utils/formatDate";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getAllArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  const allArticlesList = articles.map((article) => {
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

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <section className="section__articles">{allArticlesList}</section>
    </main>
  );
}
