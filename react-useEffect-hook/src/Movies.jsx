import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

// const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Movies() {
  const [movies, setMoives] = useState([]);

  const fetchMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2NmYzIwNjJkMWQzZmI0NWM4ZmQxMGZiZDFhNTMzYyIsInN1YiI6IjY1YjkzMmQ1OGMzMTU5MDE3YmYyOTYwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rq2vZfkkmw2XcQL6W9cnIY4Y0JfS1SvZZi8h4SUZSQM",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setMoives(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (movies.length == 0) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </>
  );
}

function MovieCard({ movies }) {
  const { backdrop_path, title, overview } = movies;
  return (
    <>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </>
  );
}

export default App;
