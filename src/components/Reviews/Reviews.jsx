import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId, setReviews]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map((review, idx) => (
          <li key={idx}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>There are no reviews</p>
      )}
    </ul>
  );
}
