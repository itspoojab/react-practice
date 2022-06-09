import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import css from "./Login.module.scss";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleChange = (value, name) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const localData = localStorage.getItem("userData");
    if (localData) {
      const userJson = JSON.parse(localData);
      const { password, email } = loginData;

      if (email === userJson.email && password === userJson.password) {
        setError("");
        navigate("/");
      } else {
        setError("Invalid credentials!!");
      }
    }
  };

  const { password, email } = loginData;

  const disableBtn = !password || !email;

  return (
    <div className={css.container}>
      <div className={css.registerBox}>
        <h1>Please login</h1>

        <div>
          <InputBox
            name="email"
            label="Enter your email"
            handleChange={handleChange}
            type="text"
            data={email}
          />
        </div>

        <div>
          <InputBox
            name="password"
            label="Enter your password"
            handleChange={handleChange}
            type="password"
            data={password}
          />
        </div>
        <div>
          <small>{error}</small>
        </div>
        <div className={css.btnContainer}>
          <button disabled={disableBtn} onClick={handleLogin}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
