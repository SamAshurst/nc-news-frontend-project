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
      <div key={articleCopy.article_id}>
        <h2>{articleCopy.title}</h2>
        <h4>{articleCopy.topic}</h4>
        <p>By: {articleCopy.author}</p>
        <p>{formatDate(articleCopy.created_at)}</p>
      </div>
    );
  });

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      Homepage
      <section>{allArticlesList}</section>
    </main>
  );
}
