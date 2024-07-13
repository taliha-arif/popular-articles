/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ article }) => {
  return (
    <li>
      <Link to={`/article/${article.id}`}>{article.title}</Link>
    </li>
  );
};

export default ArticleItem;
