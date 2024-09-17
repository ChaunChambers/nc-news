import axios from "axios";

const getComments = (article_id) => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles/${article_id}/comments`;

  return axios.get(queryString).then((response) => {
    return response.data.comments;
  });
};

export default getComments;
