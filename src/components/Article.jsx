import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getArticle from "../assets/Utils/getArticle";
import Comments from "./Comments";
import updateArticleVotes from "../assets/Utils/updateArticleVotes";
import { HashLink } from "react-router-hash-link";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({ title: "Not Found" });
  const [count, setCount] = useState(article.votes);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setCount(article.votes);
    });
  }, []);
  function handleCountUp() {
    setCounter(counter + 1);
    article.votes++;
    setCount(article.votes);
    updateArticleVotes(article_id, counter);
  }
  function handleCountDown() {
    setCounter(counter - 1);
    article.votes--;
    setCount(article.votes);
    updateArticleVotes(article_id, counter);
  }
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("./#form");
  }

  return (
    <div>
      {article.title != "Not Found" && article.title ? (
        <div className="one-article-div" id="top">
          <h3>Title: {article.title}</h3>
          <h4>Topic: {article.topic}</h4>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <h5>Created: {article.created_at}</h5>
          <h5>Votes: {count}</h5>
          <button
            onClick={handleCountUp}
            name="Vote Up"
            className="input-submit margin-left-right"
          >
            Vote Up
          </button>
          <button
            onClick={handleCountDown}
            name="Vote Down"
            className="input-submit margin-left-right"
          >
            Vote Down
          </button>
          <HashLink to="#form" className="input-submit margin-left-right">
            Post Comment
          </HashLink>
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
