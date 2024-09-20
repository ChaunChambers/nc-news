import { useEffect, useState } from "react";
import getArticles from "../assets/Utils/getArticles";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../assets/Animation.json";
import PageNotFound from "./PageNotFound";

const Topic = () => {
  const [listArticles, setListArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then((articles) => {
      setListArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  function errorHandling() {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }
  if (
    isLoading &&
    topic != "Football" &&
    topic != "Coding" &&
    topic != "Cooking"
  ) {
    errorHandling();
  }

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else
    return (
      <div>
        {console.log(topic)}
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

export default Topic;
