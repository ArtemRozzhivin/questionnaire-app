'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Loader from '@/components/Loader';
import { validateString } from '@/utils/validate';

import './style.scss';

const OMDbKey = process.env.NEXT_PUBLIC_OMDB_API;

const Search = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [isError, setIsError] = React.useState<{ error: boolean; message: string } | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { data, setData } = useAppContext();

  const fetchMovie = async () => {
    try {
      setLoading(true);

      const options = {
        method: 'GET',
        url: `https://www.omdbapi.com/?s=${searchValue}&apikey=${OMDbKey}`,
      };

      const response = await axios.request(options);

      if (response.data.Response === 'False') {
        router.push('search/no-found');
        setData({ ...data, rate: 100 });
        return;
      }

      setData({ ...data, rate: 100, movies: response.data.Search });
      router.push('search/movies');
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeSearchValue = (value: string) => {
    const validate = validateString(value);

    setIsError(validate);
    setSearchValue(value);
  };

  useEffect(() => {
    setData({ ...data, rate: 66 });
  }, []);

  return (
    <>
      {loading ? (
        <div className='search__loading'>
          <Loader />
        </div>
      ) : (
        <>
          <div className='search'>
            <h1 className='search__title'>Enter movie title</h1>
            <Input
              value={searchValue}
              onChange={(e) => handleChangeSearchValue(e.target.value)}
              type='text'
              placeholder='Movie title here'
              error={isError?.message}
            />
          </div>
          <div className='continue'>
            <div className='continue__block'>
              <Button type='button' onClick={fetchMovie} disabled={!searchValue || !!isError}>
                Continue
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;
