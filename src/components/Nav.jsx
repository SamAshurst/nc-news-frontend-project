import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <main className="NavBar__main">
      <span className="NavBar-main-topics">Topics:</span>
      <NavLink to="/topics/coding">
        <button className="topic-coding">Coding</button>
      </NavLink>
      <NavLink to="/topics/cooking">
        <button className="topic-cooking">Cooking</button>
      </NavLink>
      <NavLink to="/topics/football">
        <button className="topic-football">Football</button>
      </NavLink>
    </main>
  );
}
