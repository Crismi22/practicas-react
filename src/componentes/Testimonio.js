// import React from "react";
import '../hojas-de-estilos/testimonio.css';

function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../Imagenes/${props.imagen}.jpg`)} 
      alt="foto de llama"
      />
      <div className="contenedor-texto-testimono">
        <p className="nombre-testimonio">{props.nombre} en {props.lugar}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa} </p>
        <p className="texto-testimonio">"{props.testimonio}".</p>
      </div>

    </div>
  );
}

export default Testimonio;