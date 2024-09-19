import axios from "axios";

const getArticles = (topic) => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles`;
  let query = [];
  if (topic) {
    queryString += `?topic=${topic}`;
    query.push(topic);
  }

  return axios.get(queryString, query).then((response) => {
    return response.data.articles;
  });
};

export default getArticles;
