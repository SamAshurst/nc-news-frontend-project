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
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    api.getUserByUsername("grumpy19").then((user) => {
      setLoggedInUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/articles" element={<Homepage />} />
            <Route path="/topics/:topic_slug" element={<SingleTopic />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
