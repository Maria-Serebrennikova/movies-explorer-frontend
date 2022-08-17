import React from "react";
import "../Portfolio/portfolio.css";
// import arrow from "../../images/arrow.svg";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__list">
        <li className="portfolio__element">
        <a className="portfolio__link" href="https://github.com/Maria-Serebrennikova/how-to-learn" target="blank" >Статичный сайт</a>
        </li>
        <li className="portfolio__element">
        <a className="portfolio__link" href="https://github.com/Maria-Serebrennikova/russian-travel" target="blank" >Адаптивный сайт</a>
        </li>
        <li className="portfolio__element">
        <a className="portfolio__link" href="https://github.com/Maria-Serebrennikova/react-mesto-api-full" target="blank" >Одностраничное приложение</a>
        </li>
      </ul>
     </section>
  );
}

export default Portfolio;
