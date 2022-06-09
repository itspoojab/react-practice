import React, { Fragment } from "react";
import moment from "moment";
import css from "./MovieCard.module.scss";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import ShowDetails from "../ShowDetails/ShowDetails";
import { getFormattedDate } from "../../utils/utils";

const MovieCard = ({ data = {} }) => {
  const releasedDate = getFormattedDate(data.releasedDate);

  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.vote}>
          <BsFillCaretUpFill size="2em" className={css.icon} />
          {data?.voting}
          <BsFillCaretDownFill size="2em" className={css.icon} />
          <div className={css.text}>
          Votes
          </div>
        </div>

        <div className={css.poster}>
          <img src={data?.poster} alt={data.title} />
        </div>

        <div className={css.details}>
          <h3>{data.title}</h3>
          <div className={css.description}>
            <ShowDetails label="Genre" value={data.genre} />
            <ShowDetails label="Director" value={data.director?.join("")} />
            <ShowDetails label="Starring" value={data.stars?.join("")} />

            <div className={css.pointsContainer}>
              <p className={css.points}>{data.runTime} Mins</p>
              <p className={css.points}>{data.language}</p>
              <p className={css.points}>{releasedDate}</p>
            </div>

            <div className={css.listContainer}>
              <p className={css.list}>{data.pageViews} views</p>
              <p className={css.list}>Voted by {data.totalVoted} people</p>
            </div>
          </div>
        </div>
      </div>
      <button className={css.button}>Watch Trailer</button>
    </div>
  );
};

export default MovieCard;
