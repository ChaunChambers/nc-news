import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/api/articles" element={<ArticlesList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
