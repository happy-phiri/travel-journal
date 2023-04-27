import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.place.imageUrl} alt="" />
      </div>

      <div className="card-content">
        <p className="top">
          <span>
            <img src="./images/marker.png" alt={props.place.title} />
            <span className="location">{props.place.location}</span>
          </span>

          <a href={props.place.googleMapsUrl} className="google-maps-link">
            View on google maps
          </a>
        </p>
        <h1 className="title">{props.place.title}</h1>
        <p className="date">
          {" "}
          {props.place.startDate} - {props.place.endDate}
        </p>
        <p className="description">{props.place.description}</p>
      </div>
    </div>
  );
};

export default Card;
