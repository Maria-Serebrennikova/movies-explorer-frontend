import cardImage from "../../images/cardImage.jpg";
import cardImage2 from "../../images/cardImage2.jpg";
import cardImage3 from "../../images/cardImage3.jpg";
import cardImage4 from "../../images/cardImage4.jpg";
import cardImage5 from "../../images/cardImage5.jpg";
import cardImage6 from "../../images/cardImage6.jpg";
import cardImage7 from "../../images/cardImage7.jpg";
import cardImage8 from "../../images/cardImage8.jpg";
import cardImage9 from "../../images/cardImage9.jpg";
import cardImage10 from "../../images/cardImage10.jpg";
import cardImage11 from "../../images/cardImage11.png";
import cardImage12 from "../../images/cardImage12.jpg";

import React from "react";
import "../MoviesCardList/moviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid">
        <MoviesCard
          picture={cardImage}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage2}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage3}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage4}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage5}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage6}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage7}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage8}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage9}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage10}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage11}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
        <MoviesCard
          picture={cardImage12}
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
        />
      </div>
          </section>
  );
}

export default MoviesCardList;
