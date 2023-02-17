import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {

  function handleChange(e) {
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h4>Ingrese los datos:</h4>
      <form>
        <input type="number" placeholder="ID User" name="idUser" />
        <br />
        <br />
        <button type="submit"> Enviar </button>
      </form>
    </div>
  );
}
