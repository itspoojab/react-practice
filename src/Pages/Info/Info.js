import React from "react";
import css from "./Info.module.scss";
import ShowDetails from "../../Components/ShowDetails/ShowDetails";

const contactInfo = [
  {
    name: "Name",
    value: "Geeksynergy Technologies Pvt Ltd",
  },
  {
    name: "Address",
    value: "Sanjayanagar, Bengaluru-56",
  },
  {
    name: "Phone",
    value: "9900001211",
  },
  {
    name: "Email",
    value: "xyz@gmailcom",
  },
];

const Info = () => (
  <div className={css.container}>
    <div className={css.box}>
      {contactInfo.map(({ name, value }) => (
        <ShowDetails key={name} label={name} value={value} />
      ))}
    </div>
  </div>
);

export default Info;
