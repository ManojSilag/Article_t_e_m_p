import React, { useState } from "react";
import "./AddNewArticleForm.css";
import moment from "moment"

function AddNewArticleForm({onSubmit}) {
  const [article, setArticle] = useState({
    publisherName: "",
    title: "",
    imageUrl: "",
    publishDate: "",
    description: "",
    id: "",
    fav: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({...article, publishDate: moment().format("D/MM/YYYY"), 
    id: Math.random(),
    imageUrl: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 6) + 1}`})
  };

  return (
    <div className="form-con">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Publisher Name">Publisher Name</label>
        <input
          type="text"
          id="Publisher Name"
          placeholder="Publisher Name"
          required
          value={article.publisherName}
          onChange={(e) => setArticle({...article, publisherName: e.target.value})}
        />

        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          required
          placeholder="Title"
          value={article.title}
          onChange={(e) => setArticle({...article, title: e.target.value})}
        />

        <label htmlFor="Description">Description</label>
        <textarea
          id="Description"
          cols="30"
          rows="10"
          required
          placeholder="Description"
          value={article.description}
          onChange={(e) => setArticle({...article, description: e.target.value})}
        ></textarea>

        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewArticleForm;
