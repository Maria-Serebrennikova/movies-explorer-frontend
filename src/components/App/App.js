import React from "react";
import './App.css';
import Header from '../Header/Header.js';
// import Main from '../Main/Main.js';
// import Footer from '../Footer/Footer.js';
// import Login from '../Login/Login.js';
// import Register from '../Register/Register.js';
// import Preloader from '../Preloader/Preloader.js';
// import Profile from '../Profile/Profile.js';
// import NotFound from '../NotFound/NotFound.js';
import SearchForm from '../SearchForm/SearchForm.js';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main/> */}
      {/* <Footer/> */}
      {/* <Login/>
      <Register/> */}
      {/* <Preloader/> */}
      {/* <Profile/>
      <NotFound/> */}
      <SearchForm/>
      </div>
  );
}

export default App;