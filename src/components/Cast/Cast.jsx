import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from 'servises/apiServis';
import { BASE_IMG_URL } from 'servises/constans';
import { ListCast } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);
  return (
    <div>
      <h1>Cast:</h1>
      {cast && !!cast.length ? (
        <ListCast>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={BASE_IMG_URL + actor.profile_path}
                alt={actor.name}
                width="150"
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ListCast>
      ) : (
        <div>We don't have any cast for this movie</div>
      )}
    </div>
  );
};
export default Cast;
