import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import QueryBar from "./QueryBar";

export default function SingleTopic({ articles }) {
  const { topic_slug } = useParams();
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTopic(topic_slug);
    setLoading(false)
  }, [topic_slug]);

  const filteredArticles = articles.filter((article) => {
    return article.topic === topic;
  });


  if (loading) return <div>Loading...</div>;
  
  return (<>
  <QueryBar />
    <main className="SingleTopic__articles">
      {filteredArticles.map((article)=>{
        return <ArticleList key={article.article_id} article={article} />
      })}
      
    </main>
    </>
  );
}
