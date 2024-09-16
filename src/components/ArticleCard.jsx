const ArticleCard = (article) => {
  return (
    <div className="article-div">
      {console.log(article)}
      <h3>{article.article.title}</h3>
      <h4>Topic: {article.article.topic}</h4>
      <h4>Author: {article.article.author}</h4>
      <h5>Created: {article.article.created_at}</h5>
      <h5>Votes: {article.article.votes}</h5>
      <p>Comment Count:{article.article.comment_count}</p>
      <button className="input-submit">View Article</button>
    </div>
  );
};

export default ArticleCard;
