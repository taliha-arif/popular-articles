import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const apiKey = "NVvZvjRUn9W2Xa36uXNQwqapNRwLWumH";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
      )
      .then((response) => setArticles(response.data.results))
      .catch((error) => console.error("Error fetching the articles:", error));
  }, []);

  return (
    <div>
      <h1>Most Popular Articles</h1>
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
