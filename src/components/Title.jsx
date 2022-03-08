import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function Title() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <header>
      <Link to="/">
        <button className="header__button">
          <h1 className="header__title">Northcoders News</h1>
        </button>
      </Link>
      <p className="header__username">{loggedInUser.username}</p>
    </header>
  );
}
