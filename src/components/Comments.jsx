import { useState, useEffect } from "react";
import getComments from "../assets/Utils/getComments";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);
  return (
    <>
      <div>
        <ul className="container-comments">
          {comments.map((comment, index) => {
            return (
              <>
                <li className="item" key={index}>
                  <div className="article-div">
                    <p>{comment.body}</p>
                    <h4>Topic: {comment.topic}</h4>
                    <h4>Author: {comment.author}</h4>
                    <h5>Created: {comment.created_at}</h5>
                    <h5>Votes: {comment.votes}</h5>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <PostComment article_id={article_id} />
    </>
  );
};

export default Comments;
