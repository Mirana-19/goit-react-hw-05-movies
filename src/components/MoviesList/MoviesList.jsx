import { Link, useLocation } from 'react-router-dom';
import {
  ImageStyled,
  MoviesListItemStyled,
  MoviesListStyled,
  TitleStyled,
} from './MoviesList.styled';
import img from '../img/defaultImg.jpg';

export default function MoviesList({ movies = [] }) {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies.map((el, idx) => (
        <MoviesListItemStyled key={idx}>
          <Link state={{ from: location }} to={`/movies/${el.id}`}>
            <ImageStyled
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${el.poster_path}`
                  : img
              }
              alt={el.title}
            />
            <TitleStyled>{el.title}</TitleStyled>
          </Link>
        </MoviesListItemStyled>
      ))}
    </MoviesListStyled>
  );
}
