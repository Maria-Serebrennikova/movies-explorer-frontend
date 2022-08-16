import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "../SavedMovies/savedMovies.css";

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <div className="savedMovies__whitespace"></div>
    </>
  );
}

export default SavedMovies;
