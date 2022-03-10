import * as api from "./api";

export default function alterVote(setSelectedArticle, article_id, voteAmount) {
  api.patchVotes(article_id, voteAmount).catch(() => {
    setSelectedArticle((currentArticle) => {
      const newArticle = { ...currentArticle };
      newArticle.votes -= voteAmount;
      return newArticle;
    });
  });
  setSelectedArticle((currentArticle) => {
    const newArticle = { ...currentArticle };
    newArticle.votes += voteAmount;
    return newArticle;
  });
}
