import React from 'react';
import Image from 'next/image';
import NoFoundImg from '@/img/not-found.png';

import './style.scss';

const NoFound = () => {
  return (
    <div className='no-results'>
      <Image width={135} height={135} src={NoFoundImg} alt='No movies found' />
      <p className='no-results__title'>No movies found</p>
    </div>
  );
};

export default NoFound;
