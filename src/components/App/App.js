import React from "react";
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
// import Preloader from '../Preloader/Preloader.js';
import Profile from '../Profile/Profile.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <Login/>
      <Register/>
      {/* <Preloader/> */}
      <Profile/>
      </div>
  );
}

export default App;
