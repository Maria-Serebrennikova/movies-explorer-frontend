import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Movies/movies.css";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <div className="moviesCardList__else">
      <button className="moviesCardList__button" type="button">
         Ещё
        </button>
      </div>
    </>
  );
}

export default Movies;
