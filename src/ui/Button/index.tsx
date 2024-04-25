'use client';

import React from 'react';
import cx from 'clsx';
import './style.scss';

interface IButton {
  children?: JSX.Element | string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  noBorder?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  type,
  className,
  disabled,
  noBorder,
  ...props
}: IButton): JSX.Element => (
  <button
    {...props}
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={cx('button', noBorder && 'button__noBorder')}>
    {children}
  </button>
);
