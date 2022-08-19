import React from "react";
import "../AboutMe/aboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe(props) {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>

      <div className="aboutMe__container">
        <div className="aboutMe__info">
        <h3 className="aboutMe__subtitle">Мария</h3>
        <h4 className="aboutMe__profession">Фронтенд-разработчик, 36 лет</h4>
        <p className="aboutMe__text">
          Живу в г.Сочи, замужем, 2 дочерей. После окончания университета 14 лет
          работала в банковской сфере.
          <br />
          Имею огромное желание и твердую цель перейти в IT с 2021 г, когда
          поняла, что мой потенциал можно реализовать в этой области. Получаю
          удовольствие от работы, в которой результат можно увидеть.
          <br />
          Коротко о моей самодисциплине - никогда не опаздываю, и нет ни одной
          оценки "хорошо" во всех моих дипломах.
          <br />
          Увлекаюсь современными танцами, начала танцевать в 29 лет, выступаю на
          сцене. Интересна доказательная диетология простым языком, есть аккаунт
          на эту тему в соцсети.
        </p>
        <a
          className="aboutMe__link"
          href="https://github.com/Maria-Serebrennikova"
          target="blank"
        >
          Github
        </a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="Фото Марии" />
      </div>
    </section>
  );
}

export default AboutMe;
