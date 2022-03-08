import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <main className="NavBar__main">
      <span className="NavBar-main-topics">Topics:</span>
      <NavLink to="/topics/coding">
        <button>Coding</button>
      </NavLink>
      <NavLink to="/topics/cooking">
        <button>Cooking</button>
      </NavLink>
      <NavLink to="/topics/football">
        <button>Football</button>
      </NavLink>
    </main>
  );
}
