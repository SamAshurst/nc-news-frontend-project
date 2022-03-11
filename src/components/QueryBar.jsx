import { Link, useParams } from "react-router-dom";
export default function QueryBar({ defaultOrder }) {
  const { topic_slug } = useParams();
  return (
    <main className="QueryBar">
      <div className="QueryBar-main-topics">Sort by:</div>
      <section className="QueryBar__section">
        <Link to={`/topics/${topic_slug}/?sort_by=created_at&order=desc`}>
          <button className="QueryBar-button">
            <i
              className="fa-solid fa-arrow-down-wide-short"
              id={`defaultOrder-${defaultOrder}`}
            ></i>
          </button>
        </Link>
        <span className="QueryBar-date">Date</span>
        <Link to={`/topics/${topic_slug}/?sort_by=created_at&order=asc`}>
          <button className="QueryBar-button-right">
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          </button>
        </Link>

        <Link to={`/topics/${topic_slug}/?sort_by=comment_count&order=desc`}>
          <button className="QueryBar-button">
            <i className="fa-solid fa-arrow-down-wide-short"></i>
          </button>
        </Link>
        <span className="QueryBar-comments">Comments</span>
        <Link to={`/topics/${topic_slug}/?sort_by=comment_count&order=asc`}>
          <button className="QueryBar-button-right">
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          </button>
        </Link>
        <Link to={`/topics/${topic_slug}/?sort_by=votes&order=desc`}>
          <button className="QueryBar-button">
            <i className="fa-solid fa-arrow-down-wide-short"></i>
          </button>
        </Link>
        <span className="QueryBar-votes">Votes</span>
        <Link to={`/topics/${topic_slug}/?sort_by=votes&order=asc`}>
          <button className="QueryBar-button-right">
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          </button>
        </Link>
      </section>
    </main>
  );
}
