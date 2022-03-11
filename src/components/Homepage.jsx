import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleList from "./ArticleList";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getAllArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loading-text">Loading...<i className="fas fa-sync fa-spin"></i></div>;

  return (
    <main className="main__articles">
      {articles.map((article) => {
        return <ArticleList key={article.article_id} article={article} />;
      })}
    </main>
  );
}
