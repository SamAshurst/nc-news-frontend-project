import { useEffect, useState } from "react";
import * as api from "./api";

export default function useArticle(article_id) {
  const [selectedArticle, setSelectedArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .getArticleByArticleId(article_id)
      .then((article) => {
        setSelectedArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  return { selectedArticle, setSelectedArticle, loading, error };
}
