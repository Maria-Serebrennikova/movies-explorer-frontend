import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">

      {pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile" ? (
        <Header />
      ) : (
        ""
      )}

      <Routes>

        <Route
        exact path="/"
        element={<Main/>}>
        </Route>

        <Route path="/signup"
         element={<Register />}>
        </Route>

        <Route path="/signin"
        element={<Login />}>
        </Route>

        <Route path="*"
        element={<NotFound />}>
        </Route>

        <Route path="/movies"
        element={<Movies/>}>
        </Route>

        <Route path="/saved-movies"
        element={<SavedMovies/>}>
        </Route>

        <Route path="/profile"
        element={<Profile />}>
        </Route>
      </Routes>

      {pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
