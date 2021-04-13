import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import styles from "./ListOfMovies.module.scss";

const ListOfMovies = ({
  movies,
  setMovieStateOnParent,
  setMovieIdOnParent,
  sugestedMovies
}) => {
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMovieStateOnParent("");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onClick = (data) => {
    setMovieStateOnParent("");
    setMovieIdOnParent(data.imdbID);
  };

  return (
    <>
    {sugestedMovies ? <h2 className={styles.sugestedMovies}>Sugested Movies</h2> : ""}
      <div className={styles.items} ref={wrapperRef}>
        {movies.map((el) => {
          return (
            <div
              key={el.imdbID}
              onClick={() => onClick(el)}
              className={styles.item}
            >
              <p>{el.Title}</p>
              {el.Poster === "N/A" ? (
                <div className={styles.spanContainer}>
                  <span>This movie has no image</span>
                </div>
              ) : (
                <div className={styles.imageContainer}>
                  <img width={40} src={el.Poster} alt={el.Title} />
                </div>
              )}
              <p>({el.Year})</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListOfMovies;
