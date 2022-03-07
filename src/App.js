import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import * as api from "./utils/api";

import "./App.css";

import Home from "./components/Home";

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
          <h1>Initial setup done</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
