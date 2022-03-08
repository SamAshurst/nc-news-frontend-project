import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://project-northcoders-news.herokuapp.com/api",
});

export function getUserByUsername(username) {
  return newsApi.get(`/users/${username}`).then(({ data: { user } }) => user);
}

export function getAllArticles() {
  return newsApi.get("/articles").then(({ data: { articles } }) => articles);
}

export function getArticleByArticleId(id) {
  return newsApi
    .get(`/articles/${id}`)
    .then(({ data: { article } }) => article);
}

export function getCommentsByArticleId(id) {
  return newsApi
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments.sort(function (a, b) {
        return a.created_at > b.created_at
          ? -1
          : a.created_at < b.created_at
          ? 1
          : 0;
      });
    });
}
