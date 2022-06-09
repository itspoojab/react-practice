import React from "react";
import css from "./InputBox.module.scss";

const InputBox = ({ type, handleChange, name, label,data }) => (
  <div className={css.container}>
    {/* <label for={name}>{label}</label> */}
    <input
      id={name}
      type={type}
      name={name}
      onChange={(e) => {
        handleChange(e.target.value, name);
      }}
      placeholder={label}
      value={data}
    />
  </div>
);

export default InputBox;
