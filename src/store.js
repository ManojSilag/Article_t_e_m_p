import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  articleListReducer,
  articleAddReducer,
  articleFavReducer,
} from "./reducers/articleReducer";

const reducer = combineReducers({
  ArticleList: articleListReducer,
  addArticle: articleAddReducer,
  FavArticle: articleFavReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
