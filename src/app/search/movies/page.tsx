'use client';

import React, { useEffect } from 'react';
import MovieList from '@/components/MovieList';
import { useAppContext } from '@/components/AppContext';
import { Button } from '@/ui/Button';
import Link from 'next/link';
import routes from '@/routes';
import { MovieCard } from '@/components/MovieCard';
import { useRouter } from 'next/navigation';

const Movies = () => {
  const router = useRouter();
  const { data } = useAppContext();

  useEffect(() => {
    if (data.movies.length === 0) router.push(routes.search);
  }, []);

  return (
    <>
      {data.movies.length === 1 ? (
        <MovieCard movie={data.movies[0]} />
      ) : (
        <MovieList movies={data.movies} />
      )}

      <div className='continue'>
        <div className='continue__block'>
          <Link href={routes.search}>
            <Button type='button'>Complete</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Movies;
