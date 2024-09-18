import { useState } from "react";
import postComment from "../assets/Utils/postComment";
import { HashLink } from "react-router-hash-link";
const PostComment = ({ article_id }) => {
  const [username, setUsername] = useState("");
  const [content_body, setContentBody] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChangeName(event) {
    setUsername(event.target.value);
  }

  function handleChangeBody(event) {
    setContentBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSuccessful(!isSuccessful);
    postComment(article_id, username, content_body).catch((err) => {
      if (err.message === "Request failed with status code 404") {
        setErrorMessage("Enter correct username and message");
      }
      if (err.status === 400) {
        setErrorMessage("Enter correct username and message");
      }
      setIsSuccessful(false);
      setIsError(true);
      console.log(err);
    });
    setUsername("");
    setContentBody("");
    setErrorMessage("");
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} id="form">
          <label className="input" required>
            Username
          </label>
          <input
            name="name"
            type="text"
            placeholder="Write username..."
            value={username}
            onChange={handleChangeName}
          />
          <label className="input" required>
            Type Your Comment
          </label>
          <textarea
            name="content_body"
            type="text"
            placeholder="Write message..."
            value={content_body}
            onChange={handleChangeBody}
            rows="4"
            cols="50"
          ></textarea>
          <button className="add-new-comment input-submit margin-top">
            Add New Comment
          </button>
        </form>

        {isSuccessful && <h3>Comment posted!</h3>}
        {isError && <h3>{errorMessage}</h3>}
        <HashLink
          to="#top"
          className="input-submit margin-left-right float-right"
        >
          Back to the top
        </HashLink>
      </div>
    </div>
  );
};

export default PostComment;
