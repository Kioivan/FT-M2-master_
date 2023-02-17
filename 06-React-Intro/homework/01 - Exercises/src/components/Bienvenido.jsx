import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Ivan Sanz";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  let i= 0;
  return (

    <div>
      <h1>Bienvenido Cohorte PT-11a</h1>
      <h3>{studentName}</h3>
      <ul>
      {techSkills.map(e  =>
  <li key={i++}>{e}</li>
    )}
  </ul>
  <Botones alerts={alerts}/>
    </div>

  );
}


// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
