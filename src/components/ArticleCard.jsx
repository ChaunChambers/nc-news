import { Link } from "react-router-dom";

const ArticleCard = (article) => {
  return (
    <div className="article-div">
      <h3>{article.article.title}</h3>
      <h4>Topic: {article.article.topic}</h4>
      <h4>Author: {article.article.author}</h4>
      <h5>Created: {article.article.created_at}</h5>
      <h5>Votes: {article.article.votes}</h5>
      <p>Comment Count: {article.article.comment_count}</p>
      <Link to={`../api/articles/${article.article.article_id}`}>
        View Article
      </Link>
    </div>
  );
};

export default ArticleCard;
