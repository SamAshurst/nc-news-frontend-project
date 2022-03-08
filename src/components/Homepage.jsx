import ArticleList from "./ArticleList";

export default function Homepage({articles, loading}) {

  if (loading) return <div>Loading...</div>;

  return (
    <main className="main__articles">
      {articles.map((article)=>{
        return <ArticleList key={article.article_id} article={article}/>
      })}
      
    </main>
  );
}
