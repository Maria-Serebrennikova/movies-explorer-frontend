import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </>
  );
}

export default Movies;