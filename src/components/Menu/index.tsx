'use client';

import { Button } from '@/ui/Button';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@/img/icons/menu.svg';
import Link from 'next/link';
import routes from '@/routes';

import './style.scss';

const options = [
  {
    title: 'Головна',
    link: routes.main,
  },
  {
    title: 'Пошук',
    link: routes.search,
  },
];

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClickOption = () => {
    setOpenDropdown(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.dropdown')) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='dropdown'>
      <Button noBorder onClick={() => setOpenDropdown(!openDropdown)}>
        <Image src={MenuIcon} width={20} height={20} alt='menu' />
      </Button>

      {openDropdown && (
        <ul className='dropdown__open'>
          {options.map((option) => (
            <li key={option.title} className='dropdown__option'>
              <Link onClick={handleClickOption} href={option.link}>
                {option.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
