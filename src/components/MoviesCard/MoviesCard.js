import React from "react";
import "../MoviesCard/moviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie = {},
  onSaveClick = false,
  onDeleteClick = false,
  saved = false,
  savedMoviesPage = false,
}) {
  const { pathname } = useLocation();

  function handleClickSave() {
    onSaveClick(movie);
  }

  function handleClickDelete() {
    onDeleteClick(movie);
  }

  function transferToHouse(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }
  return (
    <>
      <section className="moviesCard">
        <div className="moviesCard__header">
          <div className="moviesCard__aboutFilm">
            <h2 className="moviesCard__title">{movie.nameRU}</h2>
            <p className="moviesCard__duration">
              {transferToHouse(movie.duration)}
            </p>
          </div>
          {!savedMoviesPage ? (
            <button
              onClick={saved ? handleClickDelete : handleClickSave}
              className={
                saved
                  ? "moviesCard__flag moviesCard__flag_type_active"
                  : "moviesCard__flag moviesCard__flag_type_inactive"
              }
            ></button>
          ) : (
            <button
              onClick={handleClickDelete}
              className="moviesCard__flag moviesCard__flag_type_delete"
            ></button>
          )}
        </div>

        <a
          className="moviesCard__image-link"
          href={movie.trailerLink}
          target="blank"
        >
          <img
            className="moviesCard__image"
            src={
              pathname === "/saved-movies"
                ? `${movie.image}`
                : `https://api.nomoreparties.co${movie.image.url}`
            }
            alt="Обложка фильма"
          />
        </a>
      </section>
    </>
  );
}

export default MoviesCard;
