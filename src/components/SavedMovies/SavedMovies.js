import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "../SavedMovies/savedMovies.css";

function SavedMovies({ user = {}, onDeleteClick = false, savedMoviesList = []}) {
  const [inputValue, setInputValue] = React.useState(false);
  const [shortMovies, setShortMovies] = React.useState(false);
  const [nothingFound, setNothingFound] = React.useState(true);
  const [showedMovies, setShowedMovies] = React.useState(savedMoviesList)
  const [filteredMovies, setFilteredMovies] = React.useState(showedMovies);

    function filterMovies(movies, request, shortMoviesSwitch) {
    const foundMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(request.toLowerCase())
    });

    if (shortMoviesSwitch) {
      return filterShortMovies(foundMovies);
    } else {
      return foundMovies;
    }
  };

  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  };

  function handleSearchSubmit(inputValue) {
    localStorage.setItem('savedMoviesSearch', inputValue);
    if(filterMovies(savedMoviesList, inputValue, shortMovies).length === 0) {
      setNothingFound(true)
    } else {
      setNothingFound(false)
      setFilteredMovies(filterMovies(savedMoviesList, inputValue, shortMovies))
      setShowedMovies(filterMovies(savedMoviesList, inputValue, shortMovies))
      localStorage.setItem('savedMovies', JSON.stringify(savedMoviesList));
    }
  }

  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true)
      localStorage.setItem('shortSavedMovies', true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNothingFound(true) : setNothingFound(false)
    } else {
      setShortMovies(false)
      localStorage.setItem('shortSavedMovies', false);
      filteredMovies.length === 0 ? setNothingFound(true) : setNothingFound(false)
      setShowedMovies(filteredMovies)
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('savedMoviesSearch')) {
      setInputValue(localStorage.getItem('savedMoviesSearch'));
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setShortMovies(true)
      setShowedMovies(filterShortMovies(savedMoviesList))
    } else {
      setShortMovies(false)
      setShowedMovies(savedMoviesList)
    }
  }, [savedMoviesList, user]);

  React.useEffect(() => {
    if(savedMoviesList.length !== 0) {
      setNothingFound(false)
    } else {
      setNothingFound(true)
    }
  }, [savedMoviesList])

  return (
    <>
      <SearchForm
      handleSearchSubmit={handleSearchSubmit}
      checkBoxClick={handleShortFilms}
      shortMovies={shortMovies}
      inputValue={inputValue}
      />
      <MoviesCardList
      nothingFound={nothingFound}
      moviesList={showedMovies}
      onDeleteClick={onDeleteClick}
      onSaveClick={false}
      savedMoviesPage={true}
      savedMovies={savedMoviesList}
      />
      <div className="savedMovies__whitespace"></div>
    </>
  );
}

export default SavedMovies;
