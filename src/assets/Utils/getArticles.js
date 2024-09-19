import axios from "axios";

const getArticles = (topic, sort_by = "created_at", order = "asc") => {
  let queryString = `https://backend-project-ag9c.onrender.com/api/articles`;
  let query = [];

  const validSortBys = ["created_at", "comment_count", "votes"];

  if (!validSortBys.includes(sort_by)) {
    return Promise.reject({ status: 404, message: "Invalid request" });
  }

  if (topic) {
    queryString += `?topic=${topic}`;
    query.push(topic);
  }

  if (sort_by) {
    queryString += `${topic ? `&` : `?`}sort_by=${sort_by}`;
    query.push(sort_by);
  }

  if (order === "asc") {
    queryString += `${topic || sort_by ? `&` : `?`}order=asc`;
    query.push(order);
  }
  if (order === "desc") {
    queryString += `${topic || sort_by ? `&` : `?`}order=desc`;
    query.push(order);
  }

  return axios.get(queryString, query).then((response) => {
    return response.data.articles;
  });
};

export default getArticles;
