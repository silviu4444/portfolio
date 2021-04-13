import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.scss";
import { Input, ListOfMovies, OnMovieSelect } from "../components";
import { fetchByName, fetchById } from "../api";
import video from "../media/datafhd.mp4";

const Home = () => {
  const [movie, setMovie] = useState("");
  const [moviesData, setMoviesData] = useState([
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Inception",
      Year: "2010",
      imdbID: "tt1375666",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      "Title": "The Originals",
      "Year": "2013–2018",
      "imdbID": "tt2632424",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg"
  }
  ]);
  const [movieId, setMovieId] = useState("");
  const [movieDataById, setMovieDataById] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [sugestedMovies, setSugestedMovies] = useState(true);

  useEffect(() => {
    if (movie.length === 0) {
      return;
    } else {
      setMovieDataById([]);
      fetchByName(movie, setMoviesOnParent, setLoaderStatus, setSugestedMovies);
    }
  }, [movie]);

  useEffect(() => {
    fetchById(
      movieId,
      setMovieDataByIdOnParent,
      setLoaderStatus,
      setMoviesData,
      setSugestedMovies
    );
  }, [movieId]);

  // functions for setting state on fetchingData
  const setMovieDataByIdOnParent = (data) => {
    setMovieDataById(data);
  };
  const setMoviesOnParent = (data) => {
    setMoviesData(data);
  };

  // functions for setting state on components
  const setMovieStateOnParent = (name) => {
    setMovie(name.trim());
  };

  const setMovieIdOnParent = (id) => {
    setMovieId(id);
  };
  //

  // Input implementation
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 1000);
    console.log(inputRef.current.value);
  };
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onClick = () => {
    setSearchInput("");
  };
  const setInputValue = (value) => {
    setSearchInput(value);
  };

  // loader useEffect

  useEffect(() => {
    if (loaderStatus) {
      inputRef.current.classList.add(`${styles.isLoading}`);
      return;
    }
    inputRef.current.classList.remove(`${styles.isLoading}`);
  }, [loaderStatus]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMovie(searchInput.trim());
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchInput]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
        />,
      `,
        }}
      />
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Welcome to</h2>
          <h1>MovieStats</h1>
        </div>
        <a
          onClick={handleFocus}
          href="#mainContent"
          className="btn btn-lg btn-outline-success px-4"
        >
          Search
        </a>
      </header>
      <section id="mainContent" className={styles.mainSection}>
        <Input
          onClick={onClick}
          onChange={onChange}
          value={searchInput}
          type="text"
          placeholder="Enter a movie"
          ref={inputRef}
          loaderStatus={loaderStatus}
        />
        <ListOfMovies
          movies={moviesData}
          setMovieStateOnParent={setMovieStateOnParent}
          setMovieIdOnParent={setMovieIdOnParent}
          loaderStatus={loaderStatus}
          sugestedMovies={sugestedMovies}
        />
        <OnMovieSelect data={movieDataById} />
      </section>
    </>
  );
};

export default Home;
