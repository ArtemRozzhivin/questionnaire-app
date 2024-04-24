'use client';

import React from 'react';
import './style.scss';

interface IButton {
  children?: JSX.Element | string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  type,
  className,
  disabled,
  ...props
}: IButton): JSX.Element => (
  <button {...props} disabled={disabled} type={type} onClick={onClick} className='button'>
    {children}
  </button>
);
