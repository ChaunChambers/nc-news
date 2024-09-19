import { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import "./App.css";
import NavBarSite from "./components/NavBarSite";
import DeleteComment from "./components/DeleteComment";
// import getTopics from "./assets/Utils/getTopics";
import { getTopics } from "./assets/Utils/apiCalls";
import { Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((allTopics) => {
      setTopics(allTopics);
    });
  }, []);

  return (
    <>
      <div className="router">
        <Router>
          <NavBarSite topics={topics} />
          <Header />
          <Routes>
            {topics.map((topic, index) => {
              return (
                <>
                  <Route
                    key={index}
                    path="/"
                    element={<ArticlesList oneTopic={topic.slug} />}
                  ></Route>
                  <Route
                    key={index + "2"}
                    path="/articles"
                    element={<ArticlesList oneTopic={topic.slug} />}
                  ></Route>
                </>
              );
            })}
            <Route path="/articles/:article_id" element={<Article />}></Route>
            <Route
              path="/articles/:article_id/comments"
              element={<Article />}
            ></Route>
            <Route
              path="/comments/:comment_id"
              element={<DeleteComment />}
            ></Route>
            {topics.map((topic, index) => {
              <Route
                key={index}
                path={`/articles?topic=${topic.slug}`}
                element={<ArticlesList oneTopic={topic.slug} />}
              ></Route>;
            })}
            <Route path="*" element={<PageNotFound />} />

            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
