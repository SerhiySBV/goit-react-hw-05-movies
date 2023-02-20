import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'servises/apiServis';

const Movie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const serchQuery = searchParams.get('query');

  useEffect(() => {
    if (!serchQuery) {
      return;
    }
    (async () => {
      try {
        const { results } = await fetchMovieByQuery(serchQuery);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [serchQuery]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movie;
