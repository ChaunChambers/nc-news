import axios from "axios";

const updateArticleVotes = (article_id, count) => {
  return axios
    .patch(
      `https://backend-project-ag9c.onrender.com/api/articles/${article_id}`,
      count
    )
    .then((response) => {
      return response;
    });
};

export default updateArticleVotes;
