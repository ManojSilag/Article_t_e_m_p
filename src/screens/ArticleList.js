import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articleActions";

export default function ArticleList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  const articleList = useSelector((state) => state.ArticleList);
  const { loading, articles } = articleList;

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        articles.map((article) => {
          return <Card {...article} key={article.id} />;
        })
      )
      }
    </div>
  );
}