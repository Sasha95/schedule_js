import "./signin.css";
import React from "react";

export default () => (
  <div className="container">
    <form className="form-signin">
      <h2 className="form-signin-heading">Заполните поля</h2>
      <label for="inputEmail" className="sr-only">
        Логин
      </label>
      <input
        type="text"
        id="inputLogin"
        className="form-control"
        placeholder="Логин"
        required
        autofocus
      />
      <label for="inputPassword" className="sr-only">
        Пароль
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Пароль"
        required
      />
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Запомнить меня
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Войти
      </button>
    </form>
  </div>
);
