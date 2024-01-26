import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { SectionStyled } from 'components/Shared/Section.styled';
import { WrapperStyled } from 'components/Shared/Wrapper.styled';
import { getMovieByID } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import OneMovie from 'components/OneMovie/OneMovie';
import { LinkStyled } from 'components/Shared/SharedLayout.styled';

export default function MoviesDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const prevLink = useRef(location.state?.from || '/');

  useEffect(() => {
    setLoading(true);
    getMovieByID(movieId)
      .then(setMovie)
      .catch(e => console.log(e.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <SectionStyled>
      <WrapperStyled>
        <LinkStyled to={prevLink.current}>Go back</LinkStyled>
        <OneMovie movie={movie} />
        <div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>

        {loading && <Loader />}

        <Suspense fallback={<p>Loading content</p>}>
          <Outlet />
        </Suspense>
      </WrapperStyled>
    </SectionStyled>
  );
}
