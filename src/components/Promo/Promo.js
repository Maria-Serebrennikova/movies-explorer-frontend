import React from "react";
import promoImage from "../../images/promo-image.svg";
import "../Promo/promo.css";

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__container">
      <div className="promo__text">
        <div className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </div>
        <div className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </div>
        <a href="https://github.com/Maria-Serebrennikova/movies-explorer-frontend" className="promo__button" target="blank">Узнать больше</a>
        </div>
        <img
          className="promo__image"
          src={promoImage}
          alt="Картинка промо-страницы"
        />
      </div>
    </section>
  );
}

export default Promo;
