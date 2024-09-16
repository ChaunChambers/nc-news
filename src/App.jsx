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
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
