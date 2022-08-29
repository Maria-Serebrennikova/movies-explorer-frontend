import React from "react";
import "../Profile/profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [initialName, setInitialName] = React.useState(currentUser.name);
  const [initialEmail, setInitialEmail] = React.useState(currentUser.email);
  const [activeButton, setActiveButton] = React.useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
    if (e.target.value !== initialName) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    if (e.target.value !== initialEmail) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setActiveButton(false);
    onUpdateUser({
      name: name,
      email: email,
    });
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

React.useEffect(() =>{
    const localStorageName = localStorage.getItem('name');
    if (localStorageName) {
      setInitialName(localStorageName);
    }
    const localStorageEmail = localStorage.getItem('email');
    if (localStorageEmail) {
      setInitialEmail(localStorageEmail);
    }
  }, [])

  return (
    <section className="profile__container">
      <h2 className="profile__greeting">Привет, {name}!</h2>
      <form className="profile__data" onSubmit={handleSubmit}>
        <div className="profile__line">
        <label className="profile__caption">Имя</label>
        <input className="profile__content" value={name} onChange={handleChangeName} id='name' required></input>
        </div>
        <div className="profile__line">
        <label className="profile__caption">E-mail</label>
        <input className="profile__content" value={email} id='email' onChange={handleChangeEmail} required></input>
        </div>

       <button className="profile__redact" disabled={!activeButton}>Редактировать</button>
       </form>
       <button className="profile__exit" onClick={onSignOut}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
