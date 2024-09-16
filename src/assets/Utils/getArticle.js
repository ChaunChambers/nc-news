import axios from "axios";

const getArticle = (article_id) => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles/${article_id}`;

  return axios.get(queryString).then((response) => {
    console.log(response.data.article);

    return response.data.article;
  });
};

export default getArticle;
