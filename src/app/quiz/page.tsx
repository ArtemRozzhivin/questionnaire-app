'use client';

import React, { useEffect } from 'react';
import { Button } from '@/ui/Button';
import cx from 'clsx';
import { Checkbox } from '@/ui/Checkbox';
import { getCookie, setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import routes from '@/routes';
import './style.scss';

const genres: IGenre[] = [
  { id: 1, icon: '🎭', title: 'Drama' },
  { id: 2, icon: '🤹', title: 'Comedy' },
  { id: 3, icon: '🐱‍👤', title: 'Action' },
  { id: 4, icon: '🧟', title: 'Thriller' },
  { id: 5, icon: '👨‍🔬', title: 'Science fiction' },
];

interface IGenre {
  id: number;
  icon: string;
  title: string;
}

const Quiz = () => {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = React.useState<IGenre | null>(null);

  const handleSelectGenre = (genre: IGenre) => {
    const genreJSON = JSON.stringify(genre);
    setSelectedGenre(genre);

    localStorage.setItem('genre', genreJSON);
    setCookie('genre', genreJSON, 1);
  };

  const handleSubmitAnswer = () => {
    router.push(routes.search);
  };

  useEffect(() => {
    const storedGenre = localStorage.getItem('genre') || getCookie('genre');

    if (storedGenre) {
      setSelectedGenre(JSON.parse(storedGenre));
    } else {
      setSelectedGenre(null);
    }
  }, []);

  return (
    <section>
      <div className='wrapper'>
        <div className='quiz'>
          <h1 className='quiz__title'>Your favorite movie genre?</h1>

          <ul className='quiz__list'>
            {genres.map((genre) => (
              <li
                onClick={() => handleSelectGenre(genre)}
                className={cx('quiz__item', selectedGenre?.id === genre.id && 'quiz__item_active')}
                key={genre.title}>
                <div className='quiz__info'>
                  <div>{genre.icon}</div>
                  <div>{genre.title}</div>
                </div>
                <Checkbox
                  checked={selectedGenre?.id === genre.id}
                  onChange={() => handleSelectGenre(genre)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className='continue'>
          <div className='continue__block'>
            <Button type='button' onClick={handleSubmitAnswer} disabled={!selectedGenre}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
