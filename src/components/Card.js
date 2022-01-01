import React from "react";
import Icon from "./Icon";
import moment from "moment"


function Card({ description, title, imageUrl, publisherName, publishDate,fav, id }) {

  const date = moment(publishDate, "D/MM/YYYY").format("YYYY MMM D");
  return (
    <div className="Card">
      <div className="Card-Side1">
        <h4>{publisherName}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="Card-foot">
          <p>{date}</p>
          <Icon id={id} fav={fav}/>
        </div>
      </div>
      <div className="Card-Side2">
        <img src={imageUrl} alt={`article-${title}`}/>
      </div>
    </div>
  );
}

export default Card;
