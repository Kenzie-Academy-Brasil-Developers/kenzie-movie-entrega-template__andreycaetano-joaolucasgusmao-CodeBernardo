export const CurrentMovie = ({movie , note} : any) => {
  return (
    <>
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
    </>
  );
};
