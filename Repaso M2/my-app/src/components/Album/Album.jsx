import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPhoto } from "../../redux/actions";
import { DivContainer } from "../Todos/Todos";
import Photo from "../Photo/Photo";

export default function Album() {

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function validateSubmit(error) {
    let valid = 0;
    let valoresError = Object.values(error);
    console.log(valoresError);
    valoresError.forEach((val) => { if (!val && val !== "") valid++; });
    if (valid === valoresError.length) return true;
    return false;
  }

  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Titulo" />
        <p></p>
        <input type="text" name="url" placeholder="URL" />
        <p></p>
        <button type="submit"> Enviar </button>
      </form>
      <br />
      <div>
        
      </div>
      <br />
      <button>Volver</button>
    </div>
  );
}
