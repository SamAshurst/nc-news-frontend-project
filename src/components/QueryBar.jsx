import { Link, useParams } from "react-router-dom";
export default function QueryBar() {
    const { topic_slug } = useParams();
  return (
    <main className="QueryBar__main">
      <span className="QueryBar-main-topics">Sort by</span>
      <Link to={`/topics/${topic_slug}/?comments=asc`}>
        <button>comments-asc</button>
      </Link>
      <Link to={`/topics/${topic_slug}/?comments=desc`}>
        <button>comments-desc</button>
      </Link>
      <Link to={`/topics/${topic_slug}/?date=asc`}>
        <button>date-asc</button>
      </Link>
      <Link to={`/topics/${topic_slug}/?date=desc`}>
        <button>date-desc</button>
      </Link>
    </main>
  );
}