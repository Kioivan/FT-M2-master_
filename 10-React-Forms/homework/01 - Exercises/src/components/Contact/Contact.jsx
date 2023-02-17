import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  const objInputs = { name: "", email: "", phone: 0, subject: "", message: "" };
  const objErrors = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [inputs, setInputs] = useState(objInputs);
  const [errors, setErrors] = useState(objErrors);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      // {name: 'cande'} -> ['cande']
      alert("Datos completos");
      setInputs(objInputs);
      setErrors(objErrors);
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          name="name"
          type="text"
          placeholder="Escribe tu nombre..."
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
        <br />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          name="email"
          type="text"
          placeholder="Escribe tu email..."
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        {errors.email && <p className="danger">{errors.email}</p>}
        <br />
        <label htmlFor="phone">Teléfono:</label>
        <input
          name="phone"
          type="number"
          placeholder="Escribe un teléfono..."
          value={inputs.phone}
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        {errors.phone && <p className="danger">{errors.phone}</p>}
        <br />
        <label htmlFor="subject">Asunto:</label>
        <input
          name="subject"
          type="text"
          placeholder="Escribe el asunto..."
          value={inputs.subject}
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        {errors.subject && <p className="danger">{errors.subject}</p>}
        <br />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          type="text"
          placeholder="Escribe tu mensaje..."
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        ></textarea>
        {errors.message && <p className="danger">{errors.message}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))
    errors.email = "Debe ser un correo electrónico";
  if (inputs.phone < 0) errors.phone = "Sólo números positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";
  return errors;
}
