import { useEffect, useState } from "react";
import getArticles from "../assets/Utils/getArticles";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../assets/Animation.json";
import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import PageNotFound from "./PageNotFound";

const ArticlesList = ({ oneTopic }) => {
  const [listArticles, setListArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  const onLoad = () => {
    let query1;
    let query2;
    let query3;

    if (sort_by || order) {
      query1 = topic;
      query2 = sort_by;
      query3 = order;
    } else if (topic) {
      query1 = topic;
    }

    useEffect(() => {
      getArticles(query1, query2, query3).then((articles) => {
        setListArticles(articles);
        setIsLoading(false);
      });
    }, []);
  };

  onLoad();

  function errorHandling() {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }
  if (
    (isLoading &&
      topic != "Football" &&
      topic != "Coding" &&
      topic != "Cooking") ||
    (isLoading &&
      sort_by != "created_at" &&
      sort_by != "comment_count" &&
      sort_by != "votes")
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
        <Search sort_by={sort_by} order={order} />
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
