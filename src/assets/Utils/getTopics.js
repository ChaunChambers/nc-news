import axios from "axios";

const getTopics = () => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/topics`;

  return axios.get(queryString).then((response) => {
    return response.data.topics;
  });
};

export default getTopics;
