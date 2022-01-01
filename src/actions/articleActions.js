import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_CLEAR_CREATE_REQUEST,
  ARTICLE_UPDATE_FAV_REQUEST,
  ARTICLE_CLEAR_UPDATE_REQUEST,
  ARTICLE_UPDATE_FAV_SUCCESS,
  ARTICLE_UPDATE_FAV_FAIL,
} from "../constants/articleConstant";
import moment from "moment"

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });
    let storedRes = localStorage.getItem("articles");
    if (storedRes) {
      dispatch({
        type: ARTICLE_LIST_SUCCESS,
        payload: JSON.parse(storedRes),
      });
    } else {
      fetch("http://demo5660605.mockable.io/article/list")
        .then((res) => res.json())
        .then((res) => {
          if (res?.list) {
            const resData = res.list.sort(function(a,b){
              return moment(b.publishDate, "D/MM/YYYY") - moment(a.publishDate, "D/MM/YYYY");
            }).map((el) => {
              return { ...el, fav: false };
            });
            localStorage.setItem("articles", JSON.stringify(resData));
            dispatch({
              type: ARTICLE_LIST_SUCCESS,
              payload: resData,
            });
          }
        });
    }
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload: error,
    });
  }
};

export const addArticleToList = (data) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_CREATE_REQUEST });
    let storedRes = localStorage.getItem("articles");
    if (storedRes) {
      const parsedData = JSON.parse(storedRes);
      localStorage.setItem("articles", JSON.stringify([data, ...parsedData]));
      dispatch({
        type: ARTICLE_CREATE_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    dispatch({
      type: ARTICLE_CREATE_FAIL,
      payload: error,
    });
  }
};

export const addArticleToList_clear = () => async (dispatch) => {
    console.log('remove');
    dispatch({ type: ARTICLE_CLEAR_CREATE_REQUEST });
};

export const updateFavArticleInList = (id) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_UPDATE_FAV_REQUEST });
    let storedRes = localStorage.getItem("articles");
    if (storedRes) {
      const parsedData = JSON.parse(storedRes);
      const updateList = parsedData.map((el) => {
        if(el.id === id){
          return {...el, fav: !el.fav}
        }
        return el
      })
      localStorage.setItem("articles", JSON.stringify([...updateList]));
      dispatch({
        type: ARTICLE_UPDATE_FAV_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    dispatch({
      type: ARTICLE_UPDATE_FAV_FAIL,
      payload: error,
    });
  }
};

export const updateFavArticleInList_clear = () => async (dispatch) => {
  dispatch({ type: ARTICLE_CLEAR_UPDATE_REQUEST });
};