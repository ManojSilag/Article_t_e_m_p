import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFavArticleInList,
  listArticles,
  updateFavArticleInList_clear
} from "../actions/articleActions";

export default function Icon({ fav, id }) {
  const dispatch = useDispatch();

  const handleUpdateFav = () => {
    dispatch(updateFavArticleInList(id));
  };

  const favArticle = useSelector((state) => state.FavArticle);
  const { success } = favArticle;

  useEffect(() => {
    if (success){
      dispatch(updateFavArticleInList_clear())
      dispatch(listArticles());
    } 
  }, [success,dispatch]);
  
  return (
    <div>
      {fav ? (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          onClick={handleUpdateFav}
        >
          <path
            d="M8 5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V7a2 2 0 0 0-2-2H8z"
            fill="#292929"
          ></path>
        </svg>
      ) : (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          onClick={handleUpdateFav}
        >
          <path
            d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1
0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7
4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
            fill="#292929"
          ></path>
        </svg>
      )}
    </div>
  );
}
