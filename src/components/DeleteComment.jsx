import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import getComments from "../assets/Utils/getComments";
import deleteComment from "../assets/Utils/deleteComment";
import getComment from "../assets/Utils/getComment";

const DeleteComment = () => {
  const { comment_id } = useParams();
  const { state } = useLocation();
  const [comment, setComment] = useState("");
  const [successfulDelete, setSuccessfulDelete] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getComment(comment_id).then((comment) => {
      setComment(comment);
    });
  }, []);

  function handleDelete() {
    deleteComment(comment_id).then((response) => console.log(response));
    setSuccessfulDelete(true);
  }
  return (
    <div>
      <ul className="container-comments">
        {/* {comments.map((comment, index) => { */}

        <>
          <li className="item">
            <div className="article-div">
              <p>{comment.body}</p>
              <h4>Author: {comment.author}</h4>
              <h5>Created: {comment.created_at}</h5>
              <h5>Votes: {comment.votes}</h5>
              <h5>Comment Id: {comment.comment_id}</h5>

              <button className="input-submit" onClick={handleDelete}>
                Delete Comment
              </button>
            </div>
          </li>
        </>

        {/* })} */}
      </ul>
      {successfulDelete && (
        <>
          <h3>Comment Deleted</h3>
          <button onClick={() => navigate(-1)} className="input-submit ">
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default DeleteComment;
