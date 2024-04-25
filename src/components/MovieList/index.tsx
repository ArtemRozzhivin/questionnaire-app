import React from 'react';
import Image from 'next/image';
import { IMovie } from '@/types';

import './style.scss';

interface IMovieList {
  movies: IMovie[];
}

const MovieList = ({ movies }: IMovieList) => {
  return (
    <ul className='list'>
      {movies.map((movie) => (
        <li key={movie.imdbID} className='card'>
          <Image
            width={154}
            height={233}
            src={movie.Poster}
            className='card__poster'
            alt={movie.Title}
          />
          <div className='card__info'>
            <h2 className='card__title'>{movie.Title}</h2>
            <p className='card__year'>{movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
