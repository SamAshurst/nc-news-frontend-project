import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleList from "./ArticleList";
import QueryBar from "./QueryBar";

export default function SingleTopic() {
  const { topic_slug } = useParams();
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleTopicArticles, setSingleTopicArticles] = useState([]);
  const [defaultOrder, setDefaultOrder] = useState(true)

  useEffect(() => {  
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams.sort_by !== undefined && currentParams.order !== undefined){
      setLoading(true);
    api
      .getArticleByQuery(currentParams).then((queryArticles) => {
      setSingleTopicArticles(queryArticles)
      setLoading(false)
      setDefaultOrder(false)
      }
      )
    }
  }, [searchParams]);

  useEffect(() => {
    setDefaultOrder(true)
    setLoading(true);
    setTopic(topic_slug);
    api.getAllArticles().then((articles) => {
      setSingleTopicArticles(articles)
      setLoading(false)})
  }, [topic_slug]);

  const filteredArticles = singleTopicArticles.filter((article) => {
    return article.topic === topic;
  });

  return (
    <>
      <QueryBar defaultOrder={defaultOrder}/>
      {loading ? <div>loading</div> : ""}
      <main className="SingleTopic__articles">
        {filteredArticles.map((article) => {
          return <ArticleList key={article.article_id} article={article} />;
        })}
      </main>
    </>
  );
}
