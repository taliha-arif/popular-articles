import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const apiKey = "NVvZvjRUn9W2Xa36uXNQwqapNRwLWumH";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
      )
      .then((response) => {
        const foundArticle = response.data.results.find(
          (article) => article.id === parseInt(id)
        );
        setArticle(foundArticle);
      })
      .catch((error) => console.error("Error fetching the article:", error));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </p>
    </div>
  );
}

export default ArticleDetail;
