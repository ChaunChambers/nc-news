import axios from "axios";

const getArticles = () => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles`;

  //   if (article_id !== null) {
  //     queryString += `/${article_id}`;
  //   }
  return axios.get(queryString).then((response) => {
    return response.data.articles;
  });
};

export default getArticles;
