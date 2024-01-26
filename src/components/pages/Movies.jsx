import { useSearchParams } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { getMoviesByName } from 'services/api';

import { SectionStyled } from 'components/Shared/Section.styled';
import { WrapperStyled } from 'components/Shared/Wrapper.styled';
import { Loader } from 'components/Loader/Loader';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
const SearchForm = lazy(() => import('components/SearchForm/SearchForm'));

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;

    setLoading(true);
    getMoviesByName(movie)
      .then(setMovies)
      .catch(e => console.log(e.message))
      .finally(() => setLoading(false));
  }, [searchParams]);

  const onFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <SectionStyled>
      <WrapperStyled>
        <SearchForm onFormSubmit={onFormSubmit} />
        {movies.length ? <MoviesList movies={movies} /> : null}
        {loading && <Loader />}
      </WrapperStyled>
    </SectionStyled>
  );
}
