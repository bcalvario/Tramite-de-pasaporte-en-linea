import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";

const Login = () => {
  return (
    <>
      <div className="form">
        <h3>Iniciar Sesión</h3>
        <div className="form-body">
          <div className="form__label">
            <label className="form__label" for="firstName">
              Correo Electrónico
            </label>
          </div>
          <div className="form_input">
            <input
              className=""
              type="text"
              id="firstName"
              placeholder="Correo"
            />
          </div>

          <div className="form__label">
            <label className="form__label" for="firstName">
              Contraseña
            </label>
          </div>
          <div className="form_input">
            <input
              className=""
              type="text"
              id="firstName"
              placeholder="Contraseña"
            />
          </div>

          <div className="footer">
            <Link to="/account">
              <a class="myButton">Iniciar Sesión</a>
            </Link>
            <Link to="/account_admin">
              <a class="myButton">Iniciar Sesión Admin</a>
            </Link>
          </div>
        </div>
        <div className="footer">
          <label className="">¿No tienes cuenta?</label>
        </div>
        <div className="footer">
          <Link to="registro">
            <a class="myButton">Registrarse</a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
