// import { Routes, Route } from "react-router-dom";
import React from "react";
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

function Main(props) {
  return (
   <main>
  <InfoTooltip/>
   <Promo />
   <AboutProject />
   <Techs />
   <AboutMe />
   <Portfolio />
   </main>
  )
}

export default Main;

