import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const API_KEY = `&api_key=33cfc2062d1d3fb45c8fd10fbd1a533c`;
const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);

  const searchMovies = async (search) => {
    const response = await fetch(
      `${API_URL}${search}&include_adult=false&language=en-US&page=1${API_KEY}`
    );
    console.log(search);
    const data = await response.json();
    // console.log(data);
    setMovies(data.results);
    console.log(data.results);
  };

  const fetchCollection = async () => {
    const res = await fetch(BASE_URL + API_KEY);
    const data = await res.json();
    setGenres(data.genres);
  };

  const showCollection = async (name) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${name}&include_adult=false&language=en-US&page=1` +
        API_KEY
    );
    const collections = await res.json();
    console.log("SHOW COLLECTION:", collections);
    setMovies(collections.results);
  };

  useEffect(() => {
    // fetchMovies();
    searchMovies("spiderman");
    fetchCollection();
    // console.log(movies);
  }, []);

  if (movies.length === 0) {
    return (
      <>
        <div>No movies found!</div>
      </>
    );
  }

  return (
    <>
      <div className="filter">
        <ul>
          {genres.map((genre) => (
            <li key={genre.id} onClick={() => showCollection(genre.name)}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Search Bar Start */}
      <div className="max-w-[1200px] mx-auto my-10">
        <div className="border-2 border-primary max-w-[600px]  flex flew-row justify-between rounded-full p-2 mx-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-secondary border-0 w-full focus:border-none focus:outline-none max-w-xs"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => searchMovies(search)}
          >
            Search
          </button>
        </div>
      </div>
      {/* Search Bar End */}

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
          <h2>Loading.....</h2>
        </div>
      )}
    </>
  );
}

// TODO 1 -> API_KEY + API_URL -> Create Link
// TODO 2 -> Fetch Data
// TODO 3 -> Show Data
// TODO 4 -> Make Dynamic Search Work
