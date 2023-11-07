import React from "react";
import Movie from "./Movie";

function MovieList({movies}) {
  // const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie}/>
      ))}
    </ul>
  );
}

export default MovieList;
