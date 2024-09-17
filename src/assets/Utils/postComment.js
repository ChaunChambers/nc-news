import axios from "axios";

const postComment = (article_id, username, content_body) => {
  const data = { username: username, content_body: content_body };

  return axios
    .post(
      `https://backend-project-ag9c.onrender.com/api/articles/${article_id}/comments`,
      data
    )
    .then((response) => {
      console.log(response);

      return response;
    });
};

export default postComment;
