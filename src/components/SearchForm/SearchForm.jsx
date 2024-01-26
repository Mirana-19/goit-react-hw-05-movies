import React, { useState } from 'react';
import { InputStyled, SearchFormStyled } from './SearchForm.styled';
import { LinkStyled } from 'components/Shared/SharedLayout/SharedLayout.styled';

export default function SearchForm({ onFormSubmit }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onFormSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <InputStyled
        value={query}
        onChange={e => setQuery(e.target.value)}
        required
      />

      <LinkStyled type="submit">Find movie</LinkStyled>
    </SearchFormStyled>
  );
}
