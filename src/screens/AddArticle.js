import React, { useEffect } from "react";
import AddNewArticleForm from "../components/AddNewArticleForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addArticleToList,
  addArticleToList_clear,
} from "../actions/articleActions";
import { useNavigate } from "react-router-dom";

function AddArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addArticle = useSelector((state) => state.addArticle);
  const { success } = addArticle;

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    dispatch(addArticleToList(data));
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(addArticleToList_clear());
        navigate("/");
      }, 1000);
    }
  }, [success,dispatch,navigate]);

  return (
    <div>
      {success && <h5 className="Message">Article Saved</h5>}
      <AddNewArticleForm onSubmit={onSubmit} />
    </div>
  );
}

export default AddArticle;
