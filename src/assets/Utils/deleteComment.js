import axios from "axios";

const deleteComment = (comment_id) => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/comments/${comment_id}`;

  return axios.delete(queryString).then((response) => {
    console.log(response);
  });
};

export default deleteComment;
