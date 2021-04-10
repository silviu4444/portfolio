import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.scss";
import { Input, ListOfMovies, OnMovieSelect } from "../components";
import { fetchByName, fetchById } from "../api";
import video from "../media/datafhd.mp4";

const Home = () => {
  const [movie, setMovie] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [movieDataById, setMovieDataById] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(false);

  useEffect(() => {
    if (movie.length === 0) {
      setMoviesData([]);
    } else {
      setMovieDataById([]);
      fetchByName(movie, setMoviesOnParent, setLoaderStatus);
    }
  }, [movie]);

  useEffect(() => {
    fetchById(movieId, setMovieDataByIdOnParent, setLoaderStatus);
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
      inputRef.current.focus()
    }, 1000)
    console.log(inputRef.current.value)
  }
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
    if(loaderStatus) {
      console.log(inputRef)
      inputRef.current.classList.add(`${styles.isLoading}`)
      return;
    }
    inputRef.current.classList.remove(`${styles.isLoading}`)
  }, [loaderStatus])

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
          placeholder="Search"
          ref={inputRef}
          loaderStatus={loaderStatus}
        />
        <ListOfMovies
          movies={moviesData}
          setMovieStateOnParent={setMovieStateOnParent}
          setMovieIdOnParent={setMovieIdOnParent}
          loaderStatus={loaderStatus}
        />
        <OnMovieSelect data={movieDataById} />
      </section>
    </>
  );
};

export default Home;
