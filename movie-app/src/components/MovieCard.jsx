import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  const { title, backdrop_path, overview, id, name } = data;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title}
              className="h-[250px] w-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmYXVsdCUyMGltYWdlfGVufDB8fDB8fHww"
              className="h-[250px] w-full object-cover"
              alt={title}
            />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title ? title : name}</h2>
          <p>{overview.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/movie/${id}`}>
              <button className="btn btn-primary">View Movie</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
