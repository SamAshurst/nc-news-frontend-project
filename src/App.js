import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import * as api from "./utils/api";

import "./App.css";

import Title from "./components/Title";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getUserByUsername("grumpy19").then((user) => {
      setLoggedInUser(user);
    });
    setLoading(true);
    api.getAllArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Homepage articles={articles} loading={loading} />}
            />
            <Route
              path="/articles"
              element={<Homepage articles={articles} loading={loading} />}
            />
            <Route
              path="/topics/:topic_slug"
              element={<SingleTopic articles={articles} />}
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
