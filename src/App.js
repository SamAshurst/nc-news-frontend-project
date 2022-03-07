import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import * as api from "./utils/api";

import "./App.css";

import Title from "./components/Title";
import Homepage from "./components/Homepage";

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
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
