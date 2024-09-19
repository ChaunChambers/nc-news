import axios from "axios";

const instance = axios.create({
  // Configuration
  baseURL: "https://backend-project-ag9c.onrender.com/api",
});

export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`).then((response) => {
    console.log(response);
  });
};

export const getArticle = (article_id) => {
  return instance.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getComment = (comment_id) => {
  return instance.get(`/comments/${comment_id}`).then((response) => {
    console.log(response);

    return response.data.comment;
  });
};

export const getComments = (article_id) => {
  return instance.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const getTopics = () => {
  return instance.get(`/topics`).then((response) => {
    return response.data.topics;
  });
};

export const postComment = (article_id, username, content_body) => {
  const data = { username: username, content_body: content_body };

  return instance
    .post(`/articles/${article_id}/comments`, data)
    .then((response) => {
      console.log(response);

      return response;
    });
};

export const updateArticleVotes = (article_id, count) => {
  const data = { inc_votes: count };

  return instance.patch(`/articles/${article_id}`, data).then((response) => {
    console.log(response);

    return response;
  });
};
