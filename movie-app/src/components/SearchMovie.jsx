import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const API_KEY = `&api_key=33cfc2062d1d3fb45c8fd10fbd1a533c`;
const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;

export default function SearchMovie() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (search) => {
    const response = await fetch(
      `${API_URL}${search}&include_adult=false&language=en-US&page=1${API_KEY}`
    );
    console.log(search);
    const data = await response.json();

    setMovies(data.results);
    console.log(data.results);
    // setSearch("");
  };

  useEffect(() => {
    searchMovies("");
    // console.log(movies);
  }, []);

  return (
    <>
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
            onClick={() => {
              searchMovies(search);
            }}
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
          <h2 className="text-center mt-10 text-green-600 text-3xl">
            Search for a movie.. 🎥
          </h2>
        </div>
      )}
    </>
  );
}

// TODO 1 -> API_KEY + API_URL -> Create Link
// TODO 2 -> Fetch Data
// TODO 3 -> Show Data
// TODO 4 -> Make Dynamic Search Work
