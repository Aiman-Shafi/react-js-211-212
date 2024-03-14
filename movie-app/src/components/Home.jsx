import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function Home() {
  const API_KEY = `&api_key=33cfc2062d1d3fb45c8fd10fbd1a533c`;
  const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
  const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchGenre = async () => {
    const res = await fetch(GENRE_URL + API_KEY);
    const data = await res.json();
    console.log(data.genres);
    setGenres(data.genres);
  };

  const showGenre = async (genre) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${genre}&include_adult=false&language=en-US&page=1${API_KEY}`
    );
    const data = await res.json();
    setMovies(data.results);
    console.log(data);
  };

  useEffect(() => {
    // fetchGenre();
    fetchGenre();
    showGenre("Action");
  }, []);
  return (
    <>
      <section className="overflow-x-hidden max-w-[1100px] mx-auto">
        <div className="flex gap-4 overflow-x-scroll py-10">
          {genres.map((genre) => (
            <button
              className="btn btn-secondary"
              onClick={() => showGenre(genre.name)}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <div>
          {/* All Movies  */}
          {movies.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 max-w-[1200px] mt-20 mx-auto">
              {/* {search.length} */}
              {movies.map((data) => (
                <MovieCard data={data} />
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-center mt-10 text-green-600 text-3xl">
                Loading...
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
