import { useState, useEffect } from "react";
import * as api from "../utils/api"
import ArticleList from "./ArticleList";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
  setLoading(true);
  api.getAllArticles().then((articles) => {
    setArticles(articles);
    setLoading(false);
  });
},[])

  if (loading) return <div>Loading...</div>;

  return (
    
    <main className="main__articles">
      {articles.map((article)=>{
        return <ArticleList key={article.article_id} article={article}/>
      })}
      
    </main>
  );
}
