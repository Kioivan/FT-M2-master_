import style from "./Form.module.css";
import React from "react";
import validateInputs from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
    setErrors(validateInputs(userData));

    console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p>

        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{errors.password}</p>

        <button>LOGIN</button>
      </form>
    </div>
  );
}
