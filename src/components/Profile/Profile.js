import React from "react";
import logo from "../../images/logo.svg";
import "../Profile/profile.css";

function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__header">
      <img className="profile__logo" src={logo} alt="Логотип" />
      </div>
      </section>
  );
}

export default Profile;
