import { Link } from "react-router-dom";

export const CurrentMovie = ({movie , note} : any) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.image} alt={movie.name} />
      <div>
        <button>{movie.type}</button>
        <h2>{movie.name}</h2>
        <div>
          <span>{movie.duration}</span>
          <div>
            <i>Star Icon</i>
            <span>{note}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
