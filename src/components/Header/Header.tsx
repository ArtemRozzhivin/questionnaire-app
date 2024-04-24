import React from 'react';
import Image from 'next/image';

import BackIcon from '@/img/icons/back.svg';
import MenuIcon from '@/img/icons/menu.svg';

import './style.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__nav'>
          <Image src={BackIcon} width={20} height={20} alt='back' />
          <div className='header__right'>
            <div>10%</div>
            <Image src={MenuIcon} width={20} height={20} alt='menu' />
          </div>
        </div>
        <div className='progress'>
          <div className='progress__fill'></div>
        </div>
      </div>
    </header>
  );
};
