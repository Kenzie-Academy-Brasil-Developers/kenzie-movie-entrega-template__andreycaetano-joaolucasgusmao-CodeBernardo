import React from "react";
import { IProductReview } from "../../@types/products";
import { useCalcMedia } from "../../hooks";

interface IMovie {
  movie: IProductReview
}

export const MovieViewed: React.FC<IMovie> = ({movie}) => {
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
            <span>{useCalcMedia(movie)}</span>
          </div>
        </div>
      </div>
      <p>{movie.synopsis}</p>
    </>
  );
};
