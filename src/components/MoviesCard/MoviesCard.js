import React from "react";
import "../MoviesCard/moviesCard.css";

function MoviesCard(props) {
  return (
    <section className="moviesCard">
      <div className="moviesCard__header">
        <div className="moviesCard__aboutFilm">
      <h2 className="moviesCard__title">{props.title}</h2>
      <p className="moviesCard__duration">{props.duration}</p>
      </div>
      <button className="moviesCard__flag" type="button"></button>
      </div>

      <img className="moviesCard__image" src={props.picture} alt="Обложка фильма" />
    </section>
  );
}

export default MoviesCard;
