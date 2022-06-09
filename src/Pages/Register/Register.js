import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import css from "./Register.module.scss";

const Register = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    profession: "Please Select profession",
  });

  const professionArr = [
    "Please Select profession",
    "Engineer",
    "Doctor",
    "Developer",
    "Tester",
  ];
  const navigate = useNavigate();
  const handleChange = (value, name) => {
    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    localStorage.setItem("userData", JSON.stringify(regData));
    navigate("/login");
  };

  const { name, password, email, mobile, profession } = regData;

  const disableBtn = !name || !password || !email || !mobile;

  return (
    <div className={css.container}>
      <div className={css.registerBox}>
        <h1>Please register</h1>

        <div>
          <InputBox
            name="name"
            label="Enter your name"
            handleChange={handleChange}
            type="text"
            data={name}
          />
        </div>
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
            name="mobile"
            label="Enter your mobile"
            handleChange={handleChange}
            type="text"
            data={mobile}
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
          <select value={profession} onChange={(e) => handleChange(e.target.value, 'profession')}>
            {professionArr.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className={css.btnContainer}>
          <button disabled={disableBtn} onClick={handleRegister}>
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
