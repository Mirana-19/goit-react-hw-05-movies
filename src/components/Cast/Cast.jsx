import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import img from '../img/defaultImg.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(e => console.log(e.message));
  }, [movieId]);

  const imgPath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul>
      {cast.map(({ character, name, profile_path }) => (
        <li key={name}>
          <img src={profile_path ? imgPath + profile_path : img} alt="name" />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
