import React from "react";
import { IProductReview } from "../../@types/products";
import { useCalcMedia } from "../../hooks";

interface IMovie {
  movie: IProductReview
}

export const MoviesList: React.FC<IMovie> = ({movie}) => {
  return (
    <>
      <li>
        <img src={movie.image} alt={movie.name} />
        <div>
          <span>{movie.type}</span>
          <h2>{movie.name}</h2>
          <div>
            <span>{movie.duration}</span>
            <div>
              <i>Star Icon</i>
              <span>{useCalcMedia(movie)}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
