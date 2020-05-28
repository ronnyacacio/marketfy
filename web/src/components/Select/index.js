import React from 'react';
import Select from 'react-select';
import { lighten } from 'polished';

import { Container } from './styles';

export default function SelectComponent({
  label,
  placeholder,
  name,
  options,
  onChange,
  defaultValue,
}) {
  const customStyles = {
    control: () => ({
      display: 'flex',
      background: '#fff',
      border: '1px solid #fff',
      borderRadius: 4,
      height: 36,
      padding: '0 7px',
      color: '#222',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#222' : '#222',
    }),
    singleValue: (provided) => {
      const color = '#222';

      return { ...provided, color };
    },
  };

  return (
    <Container>
      {label && <label>{label}</label>}
      <Select
        name={name}
        styles={customStyles}
        isSearchable={false}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#fff',
            primary25: lighten(0.8, '#fc8c1b'),
          },
        })}
      />
    </Container>
  );
}
