import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getArticle from "../assets/Utils/getArticle";
import Comments from "./Comments";
import updateArticleVotes from "../assets/Utils/updateArticleVotes";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({ title: "Not Found" });
  const [count, setCount] = useState(0);
  function handleCountUp() {
    setCount(article.votes++);
  }
  function handleCountDown() {
    setCount(article.votes--);
  }
  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    updateArticleVotes(article_id, count).then((count) => setCount(count));
  }, [count]);

  const navigate = useNavigate();
  return (
    <div>
      {article.title != "Not Found" ? (
        <div className="one-article-div">
          <h2>Title: {article.title}</h2>
          <h4>Topic: {article.topic}</h4>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <h5>Created: {article.created_at}</h5>
          <h5>Votes: {count}</h5>
          <button onClick={handleCountUp}>Vote Up</button>
          <button onClick={handleCountDown}>Vote Down</button>
          <p>Comment Count: {article.comment_count}</p>
        </div>
      ) : (
        <>
          <h2>Not Found</h2>
          <br />
          <Link to={"/"}>Home</Link>
          {/* {useEffect(() => {
            navigate("/");
          }, [])} */}
        </>
      )}

      <Comments article_id={article.article_id} />
    </div>
  );
};

export default Article;
