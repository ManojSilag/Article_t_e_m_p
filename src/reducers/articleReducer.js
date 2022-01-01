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

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true, articles: [] };
    case ARTICLE_LIST_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
      };
    case ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleAddReducer = (state = {  }, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true, success: false };
    case ARTICLE_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case ARTICLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTICLE_CLEAR_CREATE_REQUEST:
        return { loading: false, success: false };
    default:
      return state;
  }
};

export const articleFavReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_UPDATE_FAV_REQUEST:
      return { loading: true, success: false };
    case ARTICLE_UPDATE_FAV_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case ARTICLE_CLEAR_UPDATE_REQUEST:
      return { loading: false, success: false };
    case ARTICLE_UPDATE_FAV_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};