import axios from "axios";

const getArticles = () => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles/`;

  return axios.get(queryString).then((response) => {
    console.log(response.data.articles);

    return response.data.articles;
  });
};

export default getArticles;
