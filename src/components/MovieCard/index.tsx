import React from 'react';
import Image from 'next/image';
import { IMovie } from '@/types';
import './style.scss';

interface IMovieCard {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IMovieCard) => {
  return (
    <div key={movie.imdbID} className='movie'>
      <div className='movie__image'>
        <Image layout='fill' src={movie.Poster} className='movie__poster' alt={movie.Title} />
      </div>
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.Title}</h2>
        <p className='movie__year'>{movie.Year}</p>
      </div>
    </div>
  );
};
