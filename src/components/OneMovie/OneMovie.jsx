import { MovieImgStyled } from 'components/Shared/Wrapper.styled';
import { MovieTitleStyled, OneMovieDiv } from './OneMovie.styled';
import img from '../img/defaultImg.jpg';

export default function OneMovie({ movie }) {
  const { poster_path, title, overview } = movie;
  const imgPath = 'https://image.tmdb.org/t/p/w500/';
  return (
    <OneMovieDiv>
      <MovieImgStyled
        src={poster_path ? `${imgPath + poster_path}` : img}
        alt={title}
      />

      <MovieTitleStyled>{title}</MovieTitleStyled>
      <p>{overview}</p>
      <p>
        {movie?.genres &&
          movie.genres.map(({ name }) => <span key={name}>{name}</span>)}
      </p>
    </OneMovieDiv>
  );
}
