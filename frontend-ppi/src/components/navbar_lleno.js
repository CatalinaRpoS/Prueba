import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

class NavbarLleno extends React.Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-dark"
          style={{ backgroundImage: `url(${Foto2})` }}
        >
          <a className="navbar-brand" href="/ajustes">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-nut"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.42 2H4.58L1.152 8l3.428 6h6.84l3.428-6-3.428-6zM4.58 1a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58z"
              />
              <path
                fill-rule="evenodd"
                d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zM5.067 9.848a3.5 3.5 0 1 1 6.062-3.5 3.5 3.5 0 0 1-6.062 3.5z"
              />
            </svg>
          </a>
          <h1 id="titulo_3">Alto Voltaje </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/familia-y-vivienda">
                  FAMILIA Y VIVIENDA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/electrodomesticos">
                  ELECTRODOMÉSTICOS Y TIEMPO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/consumo-de-energia">
                  CONSUMO PROMEDIO DE ENERGÍA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/estrategias-ahorro">
                  ESTRATEGIAS DE AHORRO EN EL HOGAR
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/inicio">
                  INICIO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/ajustes">
                  AJUSTES
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/soporte-tecnico-2">
                  SOPORTE TÉCNICO
                </a>
              </li>
              <div class="dropdown-divider"></div>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/">
                  CERRAR SESIÓN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarLleno;
