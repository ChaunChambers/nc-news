import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import getArticle from "../assets/Utils/getArticle";
import { getArticle } from "../assets/Utils/apiCalls";
import { updateArticleVotes } from "../assets/Utils/apiCalls";
import Comments from "./Comments";
// import updateArticleVotes from "../assets/Utils/updateArticleVotes";
import { HashLink } from "react-router-hash-link";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({ title: "Not Found" });
  const [count, setCount] = useState(article.votes);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setCount(article.votes);
      setIsLoading(false);
    });
  }, []);

  function handleVote(e) {
    const buttonValue = e.target.value;

    if (buttonValue === "Vote Up") {
      setCounter(counter + 1);
      article.votes++;
      setCount(article.votes);
      updateArticleVotes(article_id, counter);
    }
    if (buttonValue === "Vote Down") {
      setCounter(counter - 1);
      article.votes--;
      setCount(article.votes);
      updateArticleVotes(article_id, counter);
    }
  }

  const navigate = useNavigate();
  function handleNavigate() {
    navigate("./#form");
  }
  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else
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
            <input
              type="submit"
              onClick={(e) => handleVote(e)}
              value="Vote Up"
              className="input-submit margin-left-right"
            />

            <input
              type="submit"
              onClick={(e) => handleVote(e)}
              value="Vote Down"
              className="input-submit margin-left-right"
            />

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
