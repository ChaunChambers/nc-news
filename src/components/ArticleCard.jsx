import { Link } from "react-router-dom";

const ArticleCard = (article) => {
  const date = article.article.created_at.match(/^20\d\d\-\d\d\-\d\d/);

  return (
    <div className="article-div-main">
      <h3>{article.article.title}</h3>
      <h4>Topic: {article.article.topic}</h4>
      <h4>Author: {article.article.author}</h4>
      <h5>Created: {date[0]}</h5>
      <h5>Votes: {article.article.votes}</h5>
      <p>Comment Count: {article.article.comment_count}</p>
      <Link
        to={`../articles/${article.article.article_id}`}
        className="input-submit "
      >
        View Article
      </Link>
    </div>
  );
};

export default ArticleCard;
