import { useState, useEffect } from "react";
import getComments from "../assets/Utils/getComments";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
      console.log(comments);
    });
  }, [article_id]);
  return (
    <div>
      <ul className="container">
        {comments.map((comment, index) => {
          return (
            <>
              <li className="item">
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
  );
};

export default Comments;
