import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getArticle from "../assets/Utils/getArticle";
import Comments from "./Comments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(
    () => {
      getArticle(article_id).then((article) => {
        setArticle(article);
      });
    },
    { article_id }
  );

  return (
    <div>
      <div className="one-article-div">
        <h2>Title:{article.title}</h2>
        <h4>Topic: {article.topic}</h4>
        <h4>Author: {article.author}</h4>
        <p>{article.body}</p>
        <h5>Created: {article.created_at}</h5>
        <h5>Votes: {article.votes}</h5>
        <p>Comment Count: {article.comment_count}</p>
      </div>

      <Comments article_id={article.article_id} />
    </div>
  );
};

export default Article;
