import { useEffect, useState } from "react";
import getArticles from "../assets/Utils/getArticles";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

const ArticlesList = (article_id) => {
  const [listArticles, setListArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setListArticles(articles);
    });
  }, []);
  return (
    <div>
      <ul className="container">
        {listArticles.map((article, index) => {
          return (
            <li key={index} className="item">
              {console.log(article_id)}

              <ArticleCard article={article} article_id={article_id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
