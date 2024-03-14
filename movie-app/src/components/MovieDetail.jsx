import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const params = useParams();

  const BASE_URL = `https://api.themoviedb.org/3/movie/${params.id}?`;
  const API_KEY = "&api_key=a45feb7a543d224f42b8447894f1e7c2";
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  const [movie, setMovies] = useState([]);

  const fetchMovieDetail = async () => {
    const res = await fetch(BASE_URL + API_KEY);
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  //   if (!movie) {
  //     return null;
  //   }
  //   if (movie.length > 0) {
  //     return <div>Hello</div>;
  //   }

  return (
    <>
      <section className="max-w-[1100px] my-20 mx-auto px-8">
        {movie.backdrop_path ? (
          <img
            src={IMG_URL + movie.backdrop_path}
            alt={movie.title}
            className="shadow-lg rounded-2xl"
          />
        ) : (
          <img src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmYXVsdCUyMGltYWdlfGVufDB8fDB8fHw" />
        )}
        <h1 className="text-5xl font-bold mt-5 text-primary">{movie.title}</h1>
        <p className="text-xl font-light mt-5">{movie.overview}</p>
        {/* {movie.production_countries.length > 0
          ? movie.production_countries.map((country) => <li>{country.name}</li>)
          : ""} */}
        {/* {movie.production_companies
          ? movie.production_companies.map((country) => <li>{country.name}</li>)
          : ""} */}
      </section>
    </>
  );
}
