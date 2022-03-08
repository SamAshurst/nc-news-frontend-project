import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

export default function SingleTopic({ articles, loading }) {
  const { topic_slug } = useParams();
  const [topic, setTopic] = useState("");

  useEffect(() => {
    setTopic(topic_slug);
  }, [topic_slug]);
  const filteredArticles = articles.filter((article) => {
    return article.topic === topic;
  });

  if (loading) return <div>Loading...</div>;
  
  return (
    <main className="SingleTopic__articles">
      <ArticleList articles={filteredArticles} />
    </main>
  );
}
