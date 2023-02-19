import Home from 'pages/Home';
import { Movie } from 'pages/Movie';
import { MovieDetails } from 'pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Navigation } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviews';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
