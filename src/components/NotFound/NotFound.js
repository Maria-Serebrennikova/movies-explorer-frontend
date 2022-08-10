import React from "react";
import "../NotFound/notFound.css";

function NotFound(props) {
  return (
    <section className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      <p className="notFound__comeBack">Назад</p>
     </section>
  );
}

export default NotFound;
