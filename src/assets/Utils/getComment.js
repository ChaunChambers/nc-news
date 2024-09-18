import axios from "axios";

const getComment = (comment_id) => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/comments/${comment_id}`;

  return axios.get(queryString).then((response) => {
    console.log(response);

    return response.data.comment;
  });
};

export default getComment;
