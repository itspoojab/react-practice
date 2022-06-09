import React, { useEffect, useState } from "react";
import { getMovieList } from "../../utils/utils";
import MovieCard from "../../Components/MovieCard/MovieCard";

import css from "./Home.module.scss";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const getData = async () => {
    const data = await getMovieList();
    setMovieList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={css.container}>
      

      <div className={css.cardContainer}>
      {movieList.map((x) => (
        <div className={css.item}  key={x._id}>
          <MovieCard data={x} />
        </div>
      ))}

      </div>
     
    </div>
  );
};

export default Home;
