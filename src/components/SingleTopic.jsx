import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleList from "./ArticleList";
import QueryBar from "./QueryBar";
import ErrorPage from "./ErrorPage";

export default function SingleTopic() {
  const { topic_slug } = useParams();
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleTopicArticles, setSingleTopicArticles] = useState([]);
  const [defaultOrder, setDefaultOrder] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTopic(topic_slug);
    setDefaultOrder(true);
    setError(null);
    api.getAllArticles().then((articles) => {
      setSingleTopicArticles(articles);
    });
  }, [topic_slug]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (Object.keys(currentParams).length === 0) {
      setError(null);
      
    } else {
      setDefaultOrder(false);
    }
    if (
      (currentParams.sort_by === undefined ||
        currentParams.order === undefined) &&
      Object.keys(currentParams).length > 0
    ) {
      setError({ response: { data: { msg: "Invalid query" } } });
    }
    setLoading(true);
    api
      .getArticleByQuery(currentParams)
      .then((queryArticles) => {
        setSingleTopicArticles(queryArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchParams]);

  function validTopic(topic_slug) {
    const valid = ["coding", "cooking", "football"];
    if (valid.includes(topic_slug)) {
      return true;
    }
    return false;
  }

  const filteredArticles = singleTopicArticles.filter((article) => {
    return article.topic === topic;
  });

  if (!validTopic(topic_slug)) {
    return <ErrorPage error={error} />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <QueryBar defaultOrder={defaultOrder} />
      {loading ? (
        <div className="loading-text">
          Loading...<i className="fas fa-sync fa-spin"></i>
        </div>
      ) : (
        ""
      )}
      <main className="SingleTopic__articles">
        {filteredArticles.map((article) => {
          return <ArticleList key={article.article_id} article={article} />;
        })}
      </main>
    </>
  );
}
