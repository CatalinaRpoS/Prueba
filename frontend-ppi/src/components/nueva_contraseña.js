import React from "react";
import "../styles/styles.css";
import swal from "sweetalert2";

class NuevaContraseña extends React.Component {
  render() {
    const crear = () => {
      swal
        .fire({
          title: "¡Tu nueva contraseña fue creada de forma exitosa!",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332"
        })
        .then((resultado) => {
          if (resultado.value) {
            location.href = "/iniciar-sesion";
          }
        });
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <p className="texto_1">
              Luego de este proceso, debes iniciar sesión nuevamente
            </p>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <input
                type="email"
                className="form-control"
                id="iniciar"
                placeholder="Contraseña"
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <input
                type="password"
                className="form-control"
                id="iniciar"
                placeholder="Confirmar contraseña"
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col">
              <button
                type="button"
                className="btn w-100"
                onClick={() => crear()}
                id="button_2"
              >
                <span className="texto_1">¡Listo!</span>
              </button>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default NuevaContraseña;
