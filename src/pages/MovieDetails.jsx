import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetsById } from 'servises/apiServis';
import { BASE_IMG_URL } from 'servises/constans';
import MoveeLinkStyled, { Box, GoBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetsById(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movieData) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>MovieDetails</h1>
      <GoBack onClick={handleGoBack}>Go back</GoBack>
      <img
        src={BASE_IMG_URL + movieData.poster_path}
        alt="Poster"
        width="300"
        height="400"
      />

      <MovieInfo movieData={movieData} />
      <Box>
        <MoveeLinkStyled to="cast" state={{ from: location.state.from }}>
          cast
        </MoveeLinkStyled>
        <MoveeLinkStyled to="reviews" state={{ from: location.state.from }}>
          reviews
        </MoveeLinkStyled>
      </Box>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
