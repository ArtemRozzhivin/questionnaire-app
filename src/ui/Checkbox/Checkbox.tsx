import React from 'react';

import './style.scss';

interface ICheckbox {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ id, name, checked, onChange }: ICheckbox) => {
  const identifier = id || name;

  return (
    <input id={identifier} name={name} onChange={onChange} checked={checked} type='checkbox' />
  );
};
