import React from "react";

function Boton({texto, handleImageDownload}) {
  return (
    <div className=" p-4">
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleImageDownload}>  <span className="alert" > 4° PASO : </span> Descargar volante </button>  
    </div>
  );
}

export default Boton;
