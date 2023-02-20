import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchDayTrend } from 'servises/apiServis';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchDayTrend();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
