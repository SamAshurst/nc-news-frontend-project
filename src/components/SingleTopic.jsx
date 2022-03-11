import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleList from "./ArticleList";
import QueryBar from "./QueryBar";

export default function SingleTopic({ articles }) {
  const { topic_slug } = useParams();
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleTopicArticles, setSingleTopicArticles] = useState(articles);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams.sort_by !== undefined && currentParams.order !== undefined){
    api
      .getArticleByQuery(currentParams).then((queryArticles) => 
      setSingleTopicArticles(queryArticles)
      )
    }
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    setTopic(topic_slug);
    setLoading(false);
  }, [topic_slug]);

  const filteredArticles = singleTopicArticles.filter((article) => {
    return article.topic === topic;
  });

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <QueryBar />
      <main className="SingleTopic__articles">
        {filteredArticles.map((article) => {
          return <ArticleList key={article.article_id} article={article} />;
        })}
      </main>
    </>
  );
}
