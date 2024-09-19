import { useEffect, useState } from "react";
import getArticles from "../assets/Utils/getArticles";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../assets/Animation.json";

const ArticlesList = () => {
  const [listArticles, setListArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setListArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else
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
