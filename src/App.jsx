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

function App() {
  const { article_id } = useParams();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route
            path="/api/articles"
            element={<ArticlesList article_id={article_id} />}
          ></Route>
          <Route path="/api/articles/:article_id" element={<Article />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
