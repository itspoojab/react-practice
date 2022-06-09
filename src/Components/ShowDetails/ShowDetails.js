import React from "react";
import css from './ShowDetails.module.scss'

const ShowDetails = ({ label, value }) => (
  <div className={css.container}>
    <p className={css.label}>{label} </p>
    <p className={css.value}>{value}</p>
  </div>
);

export default ShowDetails;
