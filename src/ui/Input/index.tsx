import React from 'react';
import cx from 'clsx';

import './style.scss';

interface IInput {
  id?: string;
  disabled?: boolean;
  error?: string | null | boolean;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

export const Input = ({
  id,
  disabled,
  name,
  error,
  value,
  onChange,
  type = 'text',
  placeholder,
}: IInput) => {
  console.log('ERROR', error);

  return (
    <div className='input-box'>
      <input
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cx('input', error && 'input_danger')}
      />

      {error && <span className='input__error'>{error}</span>}
    </div>
  );
};
