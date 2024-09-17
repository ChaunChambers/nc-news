import { useEffect, useState } from "react";
import getArticles from "../assets/Utils/getArticles";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

const ArticlesList = () => {
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
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
