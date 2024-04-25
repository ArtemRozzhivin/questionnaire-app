'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import BackIcon from '@/img/icons/back.svg';
import { usePathname, useRouter } from 'next/navigation';
import { getCookie } from '@/utils/cookie';
import { useAppContext } from '../AppContext';
import { Button } from '@/ui/Button';
import routes from '@/routes';
import Menu from '@/components/Menu';

import './style.scss';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data, setData } = useAppContext();

  const redirectToPreviousPage = () => {
    router.back();
  };

  useEffect(() => {
    const storedGenre = localStorage.getItem('genre') || getCookie('genre');

    if (storedGenre) {
      setData({ ...data, rate: 33 });
    }
  }, []);

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__nav'>
          <Button disabled={pathname === routes.main} noBorder onClick={redirectToPreviousPage}>
            <Image src={BackIcon} width={20} height={20} alt='back' />
          </Button>
          <div className='header__right'>
            <div>{data.rate}%</div>

            <Menu />
          </div>
        </div>
        <div className='progress'>
          <div style={{ width: `${data.rate}%` }} className='progress__fill'></div>
        </div>
      </div>
    </header>
  );
};
