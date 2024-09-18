import { useState } from "react";
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

function App() {
  return (
    <>
      <div className="router">
        <Router>
          <NavBarSite />
          <Header />
          <Routes>
            <Route path="/" element={<ArticlesList />}></Route>
            <Route path="/articles" element={<ArticlesList />}></Route>
            <Route path="/articles/:article_id" element={<Article />}></Route>
            <Route
              path="/articles/:article_id/comments"
              element={<Article />}
            ></Route>
            <Route
              path="/comments/:comment_id"
              element={<DeleteComment />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
