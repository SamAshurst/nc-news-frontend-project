import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import * as api from "../utils/api";
import formatDate from "../utils/formatDate";
import Comments from "./Comments";
import CollapseWrapper from "./CollapseWrapper";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [SelectedArticle, setSelectedArticle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getArticleByArticleId(article_id).then((article) => {
      setSelectedArticle(article);
      setLoading(false);
    });
  }, [article_id]);

  const { title, author, body, comment_count, created_at, topic, votes } =
    SelectedArticle;

  if (loading) return <div>Loading...</div>;
  return (
    <main>
      <h2 className="single-article-title">{title}</h2>
      <dt className="single-article-topic">{topic}</dt>
      <dt className="single-article-author">By: {author}</dt>
      <dt className="single-article-date">{formatDate(created_at)}</dt>
      <p className="single-article-body">{body}</p>
      <dt className="single-article-votes">Votes: {votes}</dt>
      <CollapseWrapper comment_count={comment_count}>
        <Comments article_id={article_id} />
      </CollapseWrapper>
    </main>
  );
}
