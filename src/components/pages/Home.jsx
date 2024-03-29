import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { WrapperStyled } from 'components/Shared/Wrapper/Wrapper.styled';
import { SectionStyled } from 'components/Shared/Section/Section.styled';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(result => setMovies(result))
      .catch(e => console.log(e.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SectionStyled>
      <WrapperStyled>
        <MoviesList movies={movies} />
        {loading && <Loader />}
      </WrapperStyled>
    </SectionStyled>
  );
}
