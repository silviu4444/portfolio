import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OnMovieSelect.module.scss";

const OnMovieSelect = ({ data }) => {
  return (
    <div>
      {data.map((el, index) => {
        return (
          <div key={index} className={styles.container}>
            <div className={styles.poster}>
              <img src={el.Poster} alt={el.Title} />
              <div className={styles.info}>
                <p>Year of relace: {el.Year}</p>
                <p>Actors: {el.Actors}</p>
                <p>Awards: {el.Awards}</p>
                <p>imdb Rating: {el.imdbRating}</p>
                <p>Box Office: {el.BoxOffice}</p>
              </div>
            </div>
            <div className={styles.plot}>
              <h3>Plot</h3>
              <span>{el.Plot}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnMovieSelect;
