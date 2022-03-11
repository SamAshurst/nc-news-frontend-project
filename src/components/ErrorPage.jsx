import { Link } from "react-router-dom";

export default function ErrorPage({ error }) {
  if (!error) {
    return (
      <>
        <div className="error-page-text">404: This page does not exist.</div>
        <Link className="error-page-link" to={"/"}>
          Homepage
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="error-page-text">{error.response.data.msg}</div>
      <Link className="error-page-link" to={"/"}>
        Homepage
      </Link>
    </>
  );
}
