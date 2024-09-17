import axios from "axios";

const updateArticleVotes = (article_id, count) => {
  const data = { inc_votes: count };

  return axios
    .patch(
      `https://backend-project-ag9c.onrender.com/api/articles/${article_id}`,
      data
    )
    .then((response) => {
      console.log(response);

      return response;
    });
};

export default updateArticleVotes;
