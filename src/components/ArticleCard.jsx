import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ArticleCard = (article) => {
  const date = article.article.created_at.match(/^20\d\d\-\d\d\-\d\d/);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="white">{article.article.title}</Card.Title>
        <h5>Author: {article.article.author}</h5>

        <Card.Subtitle className="mb-2 text-muted">
          Topic: {article.article.topic}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Created: {date[0]}
        </Card.Subtitle>
        <h5>Votes: {article.article.votes}</h5>
        <p>Comment Count: {article.article.comment_count}</p>
        <Link
          to={`../articles/${article.article.article_id}`}
          className="input-submit "
        >
          View Article
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
