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
