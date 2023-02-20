import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsInfo } from 'servises/apiServis';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsInfo(id).then(setReviews);
  }, [id]);
  return (
    <div>
      <h1>Reviews: </h1>
      {reviews && !!reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};

export default Reviews;
